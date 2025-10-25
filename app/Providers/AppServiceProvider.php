<?php

namespace App\Providers;

use App\Observers\DeveloperObserver;
use Illuminate\Support\ServiceProvider;
use App\Models\Developer;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Developer::observe(DeveloperObserver::class);
    }
}
