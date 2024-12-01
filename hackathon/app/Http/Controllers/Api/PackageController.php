<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Package;
use Illuminate\Http\Request;

class PackageController extends Controller
{
    // Retourner tous les packages
    public function index()
    {
        // Récupérer tous les packages avec les relations 'sender', 'dropPost', 'pickPost', et 'progressPost'
        $packages = Package::with(['sender', 'dropPost', 'pickPost', 'progressPost', 'item'])->get();

        // Retourner les packages en réponse JSON
        return response()->json($packages);
    }

    // Créer un nouveau package
    public function store(Request $request)
    {
        // Validation des données envoyées dans la requête
        $request->validate([
            'sender_id' => 'required|integer|exists:senders,id',
            'drop_post_id' => 'required|integer|exists:posts,id',
            'pick_post_id' => 'required|integer|exists:posts,id',
            'progress_post_id' => 'required|integer|exists:posts,id',
            'status' => 'required|string|max:255',
            'total_price' => 'required|numeric',
            'delivery_type' => 'required|string|max:255',
            'package_number' => 'required|integer',
            'client_phone_1' => 'required|string|max:20',
            'client_phone_2' => 'nullable|string|max:20',
            'client_adresse' => 'nullable|string|max:20',
            'flag' => 'required|boolean',
        ]);

        // Création du package avec les données envoyées
        $package = Package::create($request->all());

        // Retourner le package créé en réponse JSON avec un code HTTP 201 Created
        return response()->json($package, 201);
    }

    // Afficher un package spécifique
    public function show($id)
    {
        // Recherche du package par son ID avec les relations 'sender', 'dropPost', 'pickPost', et 'progressPost'
        $package = Package::with(['sender', 'dropPost', 'pickPost', 'progressPost', 'item'])->find($id);

        // Vérifier si le package existe
        if ($package) {
            return response()->json($package);
        } else {
            return response()->json(['message' => 'Package not found'], 404);
        }
    }

    // Mettre à jour un package existant
    public function update(Request $request, $id)
    {
        // Recherche du package à mettre à jour
        $package = Package::find($id);

        // Vérifier si le package existe
        if (!$package) {
            return response()->json(['message' => 'Package not found'], 404);
        }

        // Validation des données envoyées dans la requête
        $request->validate([
            'sender_id' => 'sometimes|integer|exists:senders,id',
            'drop_post_id' => 'sometimes|integer|exists:posts,id',
            'pick_post_id' => 'sometimes|integer|exists:posts,id',
            'progress_post_id' => 'sometimes|integer|exists:posts,id',
            'user_id' => 'sometimes|integer|exists:users,id',
            'status' => 'sometimes|string|max:255',
            'total_price' => 'sometimes|numeric',
            'delivery_type' => 'sometimes|string|max:255',
            'package_number' => 'sometimes|integer',
            'client_phone_1' => 'sometimes|string|max:20',
            'client_phone_2' => 'sometimes|string|max:20',
            'flag' => 'sometimes|boolean',
        ]);

        // Mise à jour des données du package avec les nouvelles informations
        $package->update($request->all());

        // Retourner le package mis à jour en réponse JSON
        return response()->json($package);
    }

    // Supprimer un package
    public function destroy($id)
    {
        // Recherche du package à supprimer
        $package = Package::find($id);

        // Vérifier si le package existe
        if (!$package) {
            return response()->json(['message' => 'Package not found'], 404);
        }

        // Suppression du package
        $package->delete();

        // Retourner une réponse vide avec un code HTTP 204 No Content
        return response()->json(null, 204);
    }

    public function track($package_number)
    {
        $package = Package::where('package_number' , $package_number)->first();

        if(!$package){
            return response()->json(["error" => "no package found"], 404);
        }

        $package = [
            'package' => $package->flag ,
            'delivery_type' => $package->delivery_type,
            'progress_post_id' => $package->progress_post_id
        ];

        return response()->json(["success" => $package], 200);
    }
}
