"use client"

import { useRouter } from "next/navigation";
import React from "react";


interface DeletePostProps {
  post_id: string,
  userId: string
}

export default function DeletePostButton({post_id , userId}:DeletePostProps) {

  const router = useRouter()
  const handleDeletePost = async () => {

    const res = await fetch("/api/delete_post", { 
      method: "POST" , 
      headers:  { "Content-Type" : "application/json"},
      body: JSON.stringify({id :post_id ,  user_id : userId  }),
    });

  if(res.ok){
    router.push("/");
    router.refresh();
  }

  }
  return (
    <button onClick={ handleDeletePost }
      className=" bg-red-500 text-white rounded p-2 hover:underline">
      Supprimer
    </button>
  );
}
