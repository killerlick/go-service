import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import path from "path";
import fs from "fs";
import { error } from "console";
import User from "@/models/User";

export async function POST(request: Request) {

    await connectDB();

    try {
        const id = await request.json();
        let user= await User.findById(id.UserId)



        if(!user){
            return NextResponse.json(
                { message: "user introuvable" }, 
                { status: 401 });
        }

        return NextResponse.json(user);
    } catch (e) {
        console.log("ereur du bougre "+e)
        return NextResponse.json({ error: "unable to fetch posts" }, { status: 500 });
    }

}