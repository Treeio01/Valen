<?php

namespace App\Observers;

use App\Models\Developer;

final class DeveloperObserver
{
    public bool $afterCommit = true;

    public function created(Developer $developer): void
    {
        try {
            // Берём сервис из контейнера (без DI в конструктор, чтобы не усложнять)
            $grok = app(\App\Services\GrokService::class);

            $nick = $developer->nickname ?: ('developer_' . $developer->id);
            $reply = $grok->ask($nick); // синхронно

            // Сохраняем ответ (поле — на твой выбор)
            $developer->forceFill(['ai_desc' => $reply])->save();
        } catch (\Throwable $e) {
            // Не ломаем создание пользователя из-за сбоя Grok
            \Log::warning('Grok call failed on user created', [
                'user_id' => $developer->id,
                'msg' => $e->getMessage(),
            ]);
        }
    }
}
