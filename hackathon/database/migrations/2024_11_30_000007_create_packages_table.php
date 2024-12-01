<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sender_id');
            $table->unsignedBigInteger('drop_post_id');
            $table->unsignedBigInteger('pick_post_id');
            $table->unsignedBigInteger('progress_post_id');
            $table->string('status');
            $table->string('package_number')->unique();
            $table->string('delivery_type');
            $table->string('flag');
            $table->float('total_price');
            $table->string('client_adresse');
            $table->string('client_phone_1');
            $table->string('client_phone_2');
            $table->foreign('sender_id')->references('id')->on('senders')->onDelete('cascade');
            $table->foreign('pick_post_id')->references('id')->on('posts')->onDelete('cascade');
            $table->foreign('drop_post_id')->references('id')->on('posts')->onDelete('cascade');
            $table->foreign('progress_post_id')->references('id')->on('posts')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('packages');
    }
};
