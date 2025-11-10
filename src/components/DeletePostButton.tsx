"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";


interface DeletePostProps {
  post_id: string,
  userId: string
}

export default function DeletePostButton({ post_id, userId }: DeletePostProps) {

  const [showModal, setShowModal] = useState(false)

  const router = useRouter()
  const handleDeletePost = async () => {

    const res = await fetch("/api/delete_post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: post_id, user_id: userId }),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    }

  }
  return (
    <div className="mt-4">
      <button onClick={() => setShowModal(!showModal)}
        className=" bg-red-500 text-white rounded p-2 hover:underline">
        Supprimer
      </button>

       {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-center">Supprimer le post</h2>
            <div className="flex justify-end gap-2">

              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
                Annuler
              </button>

              <button
                onClick={handleDeletePost}
                className="bg-red-500 text-white rounded p-2 hover:underline hover:bg-red-700 disabled:bg-gray-700"
              >
                supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}
