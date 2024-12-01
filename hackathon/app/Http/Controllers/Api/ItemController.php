<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    // Retourner tous les items
    public function index()
    {
        // On récupère tous les items et on retourne la réponse directement en JSON
        $items = Item::all();
        return response()->json($items);
    }

    // Créer un nouvel item
    public function store(Request $request)
    {
        // Validation des données envoyées dans la requête
        $request->validate([
            'price' => 'required|numeric',
            'name' => 'required|string|max:255',
            'quantity' => 'required|integer',
            'package_id' => 'required|exists:packages,id', // Vérifie si le package existe
        ]);

        // Création de l'item avec les données validées
        $item = Item::create($request->all());

        // Retourner la réponse JSON de l'item créé
        return response()->json($item, 201);
    }

    // Afficher un item spécifique
    public function show($id)
    {
        // Recherche de l'item par ID
        $item = Item::find($id);

        // Vérifie si l'item existe et retourne une réponse JSON, sinon retourne une erreur 404
        if ($item) {
            return response()->json($item);
        } else {
            return response()->json(['message' => 'Item not found'], 404);
        }
    }

    // Mettre à jour un item
    public function update(Request $request, $id)
    {
        // Recherche de l'item à mettre à jour
        $item = Item::find($id);

        // Vérifie si l'item existe
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        // Validation des données envoyées
        $request->validate([
            'price' => 'sometimes|numeric',
            'name' => 'sometimes|string|max:255',
            'quantity' => 'sometimes|integer',
            'package_id' => 'sometimes|exists:packages,id',
        ]);

        // Mise à jour de l'item avec les données envoyées dans la requête
        $item->update($request->all());

        // Retourner la réponse JSON de l'item mis à jour
        return response()->json($item);
    }

    // Supprimer un item
    public function destroy($id)
    {
        // Recherche de l'item à supprimer
        $item = Item::find($id);

        // Vérifie si l'item existe
        if (!$item) {
            return response()->json(['message' => 'Item not found'], 404);
        }

        // Suppression de l'item
        $item->delete();

        // Retourner une réponse vide 204 pour indiquer que la suppression a réussi
        return response()->json(null, 204);
    }
}