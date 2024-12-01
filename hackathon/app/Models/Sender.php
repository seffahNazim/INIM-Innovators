<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Package;

class Sender extends Model
{
    protected $fillable = [
        'name',
        'first_name',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function package()
    {
        return $this->hasMany(Package::class , 'sender_id');
    }

}
