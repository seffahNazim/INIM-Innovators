<?php

namespace App\Http\Controllers;

use App\Models\Sender;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\Models\User;


class UserController extends Controller
{

    public function register(Request $request){

        $request->validate([
            'name' => 'required|string|max:255',
            'first_name'=> 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);


        $user = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
            "role" => "normal"
        ]);

        if($user){
            Sender::create([
                'name' => $request->get('name'),
                'first_name' => $request->get('first_name'),
                'user_id' => $user->id
            ]);
        }

        $token = JWTAuth::fromUser($user);

        return response()->json(['message' => 'registred successfully'], 201);
    }

    public function login(Request $request){
        $credentials = $request->only('email', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'Invalid credentials'], 401);
            }

            // Get the authenticated user.
            $user = auth()->user();

            // (optional) Attach the role to the token.
            $token = JWTAuth::claims(['role' => $user->role])->fromUser($user);
            $refreshToken = Str::random(64);
            $hashedRefreshToken = hash('sha256', $refreshToken);

            $user = [
                'id' => $user->id,
                'email' => $user->email,
                'name' => $user->sender->name,
                'first_name' => $user->sender->first_name,
            ];
            return response()->json([
                'access_token' => $token,
                'refresh_token' => $hashedRefreshToken,
                'user' => $user
            ]);
        } catch (JWTException $e) {
            return response()->json(['error' => 'Could not create token'], 500);
        }
    }

    public function logout(){
        JWTAuth::invalidate(JWTAuth::getToken());
        return response()->json(['message' => 'Successfully logged out']);
    }
}
