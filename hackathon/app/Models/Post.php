<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'id',
        'postal_code'
    ];

    public function admin()
    {
        return $this->hasMany(Admin::class , 'post_id');
    }

    public function package()
    {
        return $this->hasMany(Package::class , 'post_id');
    }
}
