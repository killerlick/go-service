import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Post from "@/models/Post";
import path from "path";
import fs from "fs";
import { error } from "console";

export async function GET(request: Request) {

    await connectDB();

    try {
        const url = new URL(request.url);
        const query = url.searchParams.get("query")

        let posts;
        if (query) {        
            posts = await Post.find({
                $or: [
                    { title: { $regex: query, $options: "i" } },
                    { description: { $regex: query, $options: "i" } }
                ]
            });


        } else {
            posts = await Post.find();
        }


        return NextResponse.json(posts);
    } catch (e) {
        console.log("ereur du bougre"+e)
        return NextResponse.json({ error: "unable to fetch posts" }, { status: 500 });
    }

}