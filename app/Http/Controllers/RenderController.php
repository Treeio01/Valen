<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Developer;
use App\Models\Settings;
class RenderController extends Controller
{

    public function index()
    {
        return Inertia::render('Landing',[
            "settings" => Settings::first(),

        ]);
    }

    public function dashboard(){
        return Inertia::render('Dashboard', [
             "user" => request()->user()
        ]);
    }


}
