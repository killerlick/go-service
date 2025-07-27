// src/app/api/posts/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Post from "@/models/Post";
import User from "@/models/User";

/**
 * permet de supprimer un post
 * @param request id du post et id de l'user(par soucis de securité)
 * @returns 
 */
export async function POST(request: Request) {
  await connectDB();

  try {
    const {id , user_id} = await request.json();

    const result = await Post.deleteOne(
        {_id : id}
    )

    const user_trouver = User.findById(user_id)

    if(!user_trouver){
          return NextResponse.json({ error: "user_introuvable" }, { status: 500 });

    }


    


    return NextResponse.json(result);
  } catch (error) {
    console.error("erreur dans api/delete/posts", error);
    return NextResponse.json({ error: "erreur dans api/delete_post" }, { status: 500 });
  }
}
