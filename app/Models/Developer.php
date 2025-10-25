<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Developer extends Model
{
    use HasFactory;

    protected $table = "developers";

    protected $fillable = [
        "nickname",
        "ai_desc"
    ];

    public function reports(): HasMany
    {
        return $this->hasMany(Report::class, 'dev_id');
    }
}
