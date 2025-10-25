<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;
use App\Models\Developer;

class ReportController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            "nickname" => "required|string|max:255",
            "ca" => "required|string|max:255",
            "min_desc" => "required|string|max:255",
            "desc" => "required|string|max:255",
        ]);

        $developer = Developer::firstOrCreate([
            "nickname" => $request->input("nickname"),
        ]);

        Report::create([
            "dev_id" => $developer->id,
            "ca" => $request->input("ca"),
            "min_desc" => $request->input("min_desc"),
            "desc" => $request->input("desc"),
            "user_id" => auth()->user()->id,
        ]);

        return back()->with('success', 'Report submitted');
    }
}
