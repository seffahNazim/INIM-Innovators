<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $fillable = [
        'sender_id',
        'drop_post_id',
        'pick_post_id',
        'progress_post_id',
        'status',
        'total_price',
        'delivery_type',
        'package_number',
        'client_phone_1',
        'client_adresse',
        'client_phone_2',
        'flag'
    ];

    public function sender()
    {
        return $this->belongsTo(Sender::class, 'user_id');
    }

    public function item()
    {
        return $this->hasMany(Item::class, 'package_id');
    }


    public function dropPost()
    {
        return $this->belongsTo(Post::class, 'drop_post_id');
    }

    public function pickPost()
    {
        return $this->belongsTo(Post::class, 'pick_post_id');
    }
    public function progressPost()
    {
        return $this->belongsTo(Post::class, 'progress_post_id');
    }
}
