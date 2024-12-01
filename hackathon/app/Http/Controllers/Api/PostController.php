<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // Retourner tous les posts
    public function index()
    {
        // On récupère tous les posts avec les relations 'admin' et 'package'
        $posts = Post::with(['admin', 'package'])->get();
        
        // Retourner les posts avec leurs relations en JSON
        return response()->json($posts);
    }

    // Créer un nouvel post
    public function store(Request $request)
    {
        // Validation des données envoyées dans la requête
        $request->validate([
        
        'postal_code' => 'required|integer|unique:posts',
        ]);

        // Création du post avec les données envoyées dans la requête
        $post = Post::create($request->all());

        // Retourner le post créé en réponse JSON avec un statut 201 Created
        return response()->json($post, 201);
    }

    // Afficher un post spécifique
    public function show($id)
    {
        // Recherche du post par son ID avec les relations 'admin' et 'package'
        $post = Post::with(['admin', 'package'])->find($id);

        // Vérifier si le post existe
        if ($post) {
            return response()->json($post);
        } else {
            return response()->json(['message' => 'Post not found'], 404);
        }
    }

    // Mettre à jour un post existant
    public function update(Request $request, $id)
    {
        // Recherche du post à mettre à jour
        $post = Post::find($id);

        // Vérifier si le post existe
        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }

        // Validation des données envoyées dans la requête
        $request->validate([
            'postal_code' => 'sometimes|integer|unique:posts',
        ]);

        // Mise à jour des données du post avec les nouvelles données de la requête
        $post->update($request->all());

        // Retourner le post mis à jour en réponse JSON
        return response()->json($post);
    }

    // Supprimer un post
    public function destroy($id)
    {
        // Recherche du post à supprimer
        $post = Post::find($id);

        // Vérifier si le post existe
        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }

        // Suppression du post
        $post->delete();

        // Retourner une réponse vide avec un statut HTTP 204 No Content
        return response()->json(null, 204);
    }
}