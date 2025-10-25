<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RenderController;
use App\Http\Controllers\ReportController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [RenderController::class, 'index'])->middleware("guest")->name("landing");

Route::middleware("auth")->group(function () {
    Route::get('/dashboard', [RenderController::class, "dashboard"])->middleware("auth")->name('dashboard');
    Route::get('/reports', [RenderController::class, "reports"])->middleware("auth")->name('reports');
    Route::get('/developer/{developer:nickname}', [RenderController::class, "developer"])->middleware("auth")->name('developer.profile');
    Route::get('/profile', [RenderController::class, "profile"])->middleware("auth")->name('profile');
});


Route::post('/reports/store', [ReportController::class, "store"])->middleware("auth")->name("reports.store");

require __DIR__.'/auth.php';
