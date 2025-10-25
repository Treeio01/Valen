<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Report extends Model
{
    use HasFactory;

    protected $fillable = [
        "dev_id",
        "ca",
        "min_desc",
        "desc",
        "user_id",
    ];
    protected $casts = [
        // вернёт строку при сериализации (toArray/JSON),
        // но в рантайме $model->getRawOriginal('created_at') и Carbon доступны
        'created_at' => 'datetime:d.m.Y',
    ];

    public function developer():BelongsTo
    {
        return $this->belongsTo(Developer::class, "dev_id");
    }

    public function user():BelongsTo{
        return $this->belongsTo(User::class, "user_id");
    }
}
