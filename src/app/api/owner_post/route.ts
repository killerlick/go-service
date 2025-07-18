// src/app/api/posts/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Post from "@/models/Post";

/**
 * permet de chercher les posts selon l'userId
 * @param request les information pour la crceation de posts
 * @returns 
 */
export async function POST(request: Request) {
  await connectDB();

  try {
    const res = await request.json();
    const posts = await Post.find(
        {user_id : res.userId}
    )


    return NextResponse.json(posts);
  } catch (error) {
    console.error("erreur dans api/owner_post", error);
    return NextResponse.json({ error: "erreur dans api/owner_post" }, { status: 500 });
  }
}
