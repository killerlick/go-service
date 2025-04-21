// app/create_post/page.tsx

"use client";

import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, image }),
    });

    if (res.ok) {
      alert("Post créé !");
      setTitle("");
      setDescription("");
      setImage("");
    } else {
      alert("Erreur lors de la création du post.");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string); // base64 string
    };
    reader.readAsDataURL(file);
  };

  const isFormValid = title.trim() !== "" && description.trim() !== "" && image !== "";

  return (
    <main className="flex-grow m-3">
      <div className="flex flex-col text-center m-3">
        <h5 className="text-2xl font-bold m-3">Création de Post</h5>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded"
            required
          />
          {description && description.trim().length < 10 && (
            <p className="text-sm text-red-500">
              La description doit contenir au moins 10 caractères.
            </p>
          )}
          <div className="flex flex-row items-center">
            <label className=" whitespace-nowrap">Choisir une image :
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="border p-2 rounded hover:bg-gray-300"
            />

          </div>

          <button type="submit" 
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-600" 
          disabled={!isFormValid}>
            Créer le post
          </button>
        </form>
      </div>
    </main>
  );
}
