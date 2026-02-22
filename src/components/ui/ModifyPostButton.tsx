"use client"

import { useRouter } from "next/navigation";
import React, {useState} from "react";

interface ModifyPostProps {
    id :string
    titre: string,
    description: string
}


export default function ModifyPostButton({id , titre , description} : ModifyPostProps) {

  const router = useRouter()
    const [showModal , setShowModal] = useState(false)
    const [newTitre , setNewTitre] = useState(titre)
    const [newDescription,setNewDescription] = useState(description)
    const [isModifying , setIsModiying] = useState(false)

  const handleModifyPost = async () => {

    setIsModiying(true)

    const res = await fetch("/api/modify_post", { 
      method: "POST" , 
      headers:  { "Content-Type" : "application/json"},
      body: JSON.stringify({id,titre : newTitre,description:newDescription}),
    });

  if(res.ok){
    setShowModal(false);
    setIsModiying(false)
    router.refresh();    

  }else{
    console.log("erreur")
    setIsModiying(false)
  }

  }
  return (
    <div className="mt-4">
    <button onClick={() => setShowModal(!showModal)}
      className=" bg-blue-500 text-white rounded p-2 hover:underline">
      Modifier
    </button>

        {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-center">Modifier le post</h2>

            <label className="block mb-2">
              Titre :
              <input
                type="text"
                value={newTitre}
                onChange={(e) => setNewTitre(e.target.value)}
                className="w-full border p-2 rounded mt-1"
              />
            </label>

            <label className="block mb-4">
              Description :
              <textarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="w-full border p-2 rounded mt-1"
                rows={4}
              />
            </label>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Annuler
              </button>
              <button
                onClick={handleModifyPost}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-700"
                disabled={isModifying}
              >
                {isModifying ? "En cours...":"Modifier"   }
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}
