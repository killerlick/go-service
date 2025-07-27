// src/app/api/posts/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Post from "@/models/Post";


/**
 * permet d'Avoir un post precis grace a son ID
 * @param request l'id du post a regarder
 * @returns 
 */
export async function GET(request: Request) {
  await connectDB();

  try {

    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (id) {
      const post = await Post.findById(id);
      if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }
      return NextResponse.json(post);
    }

    const posts = await Post.find().sort({_id : -1}).limit(15).lean();

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

/**
 * permet de creer un post dans la base de données
 * @param request les information pour la crceation de posts
 * @returns 
 */
export async function POST(request: Request) {
  await connectDB();

  try {
    const {user_id, title, description, image } = await request.json();



    // 🔽 Créer le post avec le chemin d'accès à l'image enregistrée
    const newPost = new Post({
      user_id,
      title,
      description,
      image, // chemin relatif pour usage frontend
    });

    await newPost.save();

    return NextResponse.json({ message: "Post créé" });
  } catch (error) {
    console.error("Erreur création post:", error);
    return NextResponse.json({ error: "Échec de la création du post" }, { status: 500 });
  }
}
