<?php

declare(strict_types=1);

namespace App\Services;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Support\Facades\Log;
use RuntimeException;

final class GrokService
{
    private Client $http;
    private string $apiKey;
    private string $model;
    private bool $debug;

    public function __construct()
    {
        $cfg = config('services.grok');

        $this->apiKey = (string) ($cfg['api_key'] ?? '');
        $this->model  = (string) ($cfg['model']   ?? 'grok-4-0709');
        $this->debug  = (bool)   ($cfg['debug']   ?? false);

        if ($this->apiKey === '') {
            throw new RuntimeException('GROK_API_KEY is not set.');
        }

        $this->http = new Client([
            'base_uri'        => 'https://api.x.ai',
            'timeout'         => (int) ($cfg['timeout'] ?? 30),   // общий таймаут
            'connect_timeout' => 8.0,                              // соединение
            'read_timeout'    => 22.0,                             // чтение
            'http_errors'     => false,
            'headers' => [
                'Authorization' => 'Bearer '.$this->apiKey,
                'Content-Type'  => 'application/json',
                'User-Agent'    => 'GuzzleHttp/7',
            ],
            // иногда решает таймауты из-за IPv6
            'curl' => defined('CURL_IPRESOLVE_V4') ? [CURLOPT_IPRESOLVE => CURL_IPRESOLVE_V4] : [],
        ]);

    }
    private function systemPromptFor(string $nick): string
    {
        return <<<PROMPT
Analyze the X account of memecoin developer @{$nick}, focusing only on Solana-based memecoins. Gather complete information about them:

Who they are (bio, account history, linked accounts or communities).
Which Solana memecoins they've created or launched (names, launch dates, platforms like Pump.fun, Raydium, etc.).
Launch details: how they went (fair launch, presale, liquidity lock, tokenomics, contracts if mentioned).
What people say: reviews, mentions, complaints or praises in posts, replies, retweets (including risks like rug pull, scam, or successful cases). Search for keywords like 'rug', 'scam', 'pump', 'success' in the context of their Solana memecoins.
Activity: recent posts, threads, collaborations, engagement metrics (likes, retweets, replies).
Any red flags: anonymity, deleted posts, suspicious patterns.

Use all available X tools (keyword search, semantic search, thread fetch, user search). If needed, check linked external sites (DexScreener, Pump.fun, etc.). Provide a structured report with facts, post quotes, and conclusions in no more than 10-15 sentences. Do not make assumptions without evidence.
PROMPT;
    }

    public function ask(string $nick): string
    {
        $nick = trim($nick);
        if ($nick === '') {
            throw new RuntimeException('Nick cannot be empty.');
        }

        $endpoint = '/v1/chat/completions'; // конечный и единственно верный путь
        $method   = 'POST';

        $payload = [
            'model'    => $this->model,
            'messages' => [
                ['role' => 'system', 'content' => 'Do NOT call tools or functions. Reply in plain text only.'],
                ['role' => 'system', 'content' => $this->systemPromptFor($nick)],
            ],
            'temperature' => 0.3,
            'max_tokens'  => 800,
        ];

        // простые ретраи с эксп. бэкоффом: 3 попытки
        $attempts = 0;
        $maxAttempts = 3;
        $lastException = null;
        $effectiveUri = null;
        $transferTime = null;
        $responseHeaders = [];

        while ($attempts < $maxAttempts) {
            $attempts++;

            try {
                $response = $this->http->request($method, $endpoint, [
                    'json'     => $payload,
                    'on_stats' => static function (\GuzzleHttp\TransferStats $stats) use (&$effectiveUri, &$transferTime): void {
                        $effectiveUri = (string) $stats->getEffectiveUri();
                        $transferTime = $stats->getTransferTime();
                    },
                ]);

                $status = $response->getStatusCode();
                $body   = (string) $response->getBody();
                $responseHeaders = $this->headersToArray($response->getHeaders());

                if ($this->debug) {
                    Log::debug('Grok API request', [
                        'attempt'        => $attempts,
                        'method'         => $method,
                        'base_uri'       => (string) $this->http->getConfig('base_uri'),
                        'endpoint'       => $endpoint,
                        'effective_uri'  => $effectiveUri,
                        'headers'        => $this->maskedHeaders($this->http->getConfig('headers') ?? []),
                        'payload'        => $payload,
                        'status'         => $status,
                        'response_body'  => $this->truncate($body),
                        'response_hdrs'  => $responseHeaders,
                        'transfer_time'  => $transferTime,
                        'model'          => $this->model,
                    ]);
                }

                if ($status === 404) {
                    // Лог отдельно — помогает отлавливать неправильный путь/базу
                    Log::warning('Grok API 404', [
                        'effective_uri' => $effectiveUri,
                        'base_uri'      => (string) $this->http->getConfig('base_uri'),
                        'endpoint'      => $endpoint,
                        'payload'       => $payload,
                        'response'      => $body,
                    ]);
                }

                if ($status < 200 || $status >= 300) {
                    // Для 429/5xx попробуем ретрай
                    if (in_array($status, [429, 500, 502, 503, 504], true) && $attempts < $maxAttempts) {
                        usleep((int) (100000 * (2 ** ($attempts - 1)))); // 100ms, 200ms
                        continue;
                    }
                    throw new RuntimeException('Ошибка GROK API: ' . ($body ?: ('HTTP ' . $status)));
                }

                $data = json_decode($body, true, 512, JSON_THROW_ON_ERROR);
                $content = $data['choices'][0]['message']['content'] ?? null;
                if (is_string($content) && $content !== '') {
                    return $content;
                }

                // вернём сырой JSON, если структура неожиданная
                return json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

            } catch (GuzzleException $e) {
                $lastException = $e;

                Log::error('Grok HTTP exception', [
                    'attempt'       => $attempts,
                    'message'       => $e->getMessage(),
                    'code'          => $e->getCode(),
                    'effective_uri' => $effectiveUri,
                    'base_uri'      => (string) $this->http->getConfig('base_uri'),
                    'endpoint'      => $endpoint,
                    'headers'       => $this->maskedHeaders($this->http->getConfig('headers') ?? []),
                    'payload'       => $payload,
                    'transfer_time' => $transferTime,
                    'response_hdrs' => $responseHeaders,
                    'response'      => $this->tryGetResponseBody($e),
                ]);

                // ретраим на сетевых ошибках
                if ($attempts < $maxAttempts) {
                    usleep((int) (150000 * (2 ** ($attempts - 1)))); // 150ms, 300ms
                    continue;
                }
            }
        }

        // если дошли сюда — все попытки исчерпаны
        throw new RuntimeException('Ошибка GROK API: ' . ($lastException?->getMessage() ?? 'unknown'));
    }

    private function maskedHeaders(array $headers): array
    {
        if (isset($headers['Authorization'])) {
            $headers['Authorization'] = preg_replace('/^(Bearer\s+).+$/i', '$1************xxxx', $headers['Authorization']);
        }
        return $headers;
    }

    private function headersToArray(array $headers): array
    {
        $out = [];
        foreach ($headers as $k => $vals) {
            $out[$k] = implode(', ', (array) $vals);
        }
        return $out;
    }

    private function truncate(string $s, int $max = 4000): string
    {
        return strlen($s) > $max ? (substr($s, 0, $max) . '…[truncated]') : $s;
    }

    private function tryGetResponseBody(GuzzleException $e): ?string
    {
        if (method_exists($e, 'getResponse') && $e->getResponse()) {
            return (string) $e->getResponse()->getBody();
        }
        return null;
    }
}
