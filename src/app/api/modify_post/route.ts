// src/app/api/posts/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Post from "@/models/Post";

/**
 * permet de modifier un post
 * @param request les information pour la modification de posts
 * @returns 
 */
export async function POST(request: Request) {
  await connectDB();

  try {
    const {id , titre , description } = await request.json();

    const post = await Post.findById(id)

    post.titre =titre
    post.description = description

    await post.save()


    return NextResponse.json(post);
  } catch (error) {
    console.error("erreur dans api/modify_posts", error);
    return NextResponse.json({ error: "erreur dans api/modify+post" }, { status: 500 });
  }
}
