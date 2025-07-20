"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
    userId: string;
}

export default function CreatePostForm({ userId }: Props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const [titleCheck, setTitleCheck] = useState(false);
    const [descriptionCheck, setDescriptionCheck] = useState(false);

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id: userId, title, description, image }),
        });

        if (res.ok) {
            //alert("Post créé !");
            //setTitle("");
            //setDescription("");
            //setImage("");
            router.push("/");
            router.refresh();
        } else {
            alert("Erreur lors de la création du post.");
        }
    };

    const handleImageChange = async  (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
        });

        if (res.ok) {
            const data = await res.json();
            console.log(data.url)
            setImage(data.url); // On stocke l'URL renvoyée par l'API
        } else {
            alert("Erreur lors de l'upload de l'image.");
        }
    };

    const isFormValid = title.trim().length >= 3 && description.trim().length >= 10;

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
                        onBlur={() => setTitleCheck(true)}
                        className="border p-2 rounded"
                        required
                    />
                    {titleCheck && title.trim().length < 3 && (
                        <p className="text-sm text-red-500">
                            Le titre doit contenir au moins 3 caractères.
                        </p>
                    )}

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        onBlur={() => setDescriptionCheck(true)}
                        className="border p-2 rounded"
                        required
                    />
                    {descriptionCheck && description.trim().length < 10 && (
                        <p className="text-sm text-red-500">
                            La description doit contenir au moins 10 caractères.
                        </p>
                    )}
                    <div className="flex flex-row items-center">
                        <label className=" whitespace-nowrap">Choisir une image :</label>
                        <input
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="border p-2 rounded hover:bg-gray-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-600"
                        disabled={!isFormValid}
                    >
                        Créer le post
                    </button>
                </form>
            </div>
        </main>
    );
}
