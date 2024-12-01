<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = [
        'price',
        'name',
        'quantity',
        'package_id'
    ];

    public function package()
    {
        return $this->belongsTo(Package::class, 'package_id');
    }
}
