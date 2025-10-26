<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Log;
class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        Log::info('REGISTER DEBUG', [
            'address' => $request->input('address'),
            '_token' => $request->input('_token'),
            'session_id' => session()->getId(),
            'cookies' => request()->cookies->all(),
        ]);

        $validated = $request->validate([
            'address' => ['required', 'string', 'max:255'],
        ]);

        $address = $validated['address'];
        $rpc = config('services.solana.rpc');
        $payload = [
            'jsonrpc' => '2.0',
            'id' => 1,
            'method' => 'getBalance',
            'params' => [$address],
        ];

        $balanceSol = 0.0;
        $start = microtime(true);

        try {
            Log::info('SOLANA RPC → getBalance: отправка', [
                'rpc' => $this->shortenUrl($rpc),
                'address' => $address,
                'payload' => $payload,
            ]);

            $resp = Http::timeout(8)
                ->withHeaders(['content-type' => 'application/json'])
                ->post($rpc, $payload);

            $ms = (int)((microtime(true) - $start) * 1000);

            if ($resp->failed()) {
                Log::error('SOLANA RPC ← getBalance: HTTP ошибка', [
                    'status' => $resp->status(),
                    'rpc' => $this->shortenUrl($rpc),
                    'address' => $address,
                    'duration' => "{$ms}ms",
                    'body' => $this->truncate($resp->body()),
                ]);
            } elseif ($resp->json('error')) {
                Log::error('SOLANA RPC ← getBalance: RPC ошибка', [
                    'rpc' => $this->shortenUrl($rpc),
                    'address' => $address,
                    'duration' => "{$ms}ms",
                    'error' => $resp->json('error'),
                ]);
            } else {
                $lamports = (int)data_get($resp->json(), 'result.value', 0);
                $balanceSol = $lamports / 1_000_000_000;
                Log::info('SOLANA RPC ← getBalance: успех', [
                    'rpc' => $this->shortenUrl($rpc),
                    'address' => $address,
                    'duration' => "{$ms}ms",
                    'lamports' => $lamports,
                    'balanceSol' => $balanceSol,
                ]);
            }
        } catch (\Throwable $e) {
            $ms = (int)((microtime(true) - $start) * 1000);
            Log::error('SOLANA RPC ← getBalance: исключение', [
                'rpc' => $this->shortenUrl($rpc),
                'address' => $validated['address'],
                'duration' => "{$ms}ms",
                'message' => $e->getMessage(),
                'trace' => app()->isProduction() ? null : $e->getTraceAsString(),
            ]);
        }

        $user = User::firstOrCreate([
            'address' => $address,
            'balance' => $balanceSol
        ]);

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME)->setStatusCode(303);
    }


    private function truncate(?string $text, int $limit = 2000): ?string
    {
        if ($text === null) return null;
        return mb_strlen($text) > $limit ? (mb_substr($text, 0, $limit) . '…') : $text;
    }

    private function shortenUrl(?string $url): ?string
    {
        if (!$url) return null;
        // скрываем ключи в логах
        return preg_replace('/([?&]api[-_]?key=)[^&]+/i', '$1***', $url);
    }
}
