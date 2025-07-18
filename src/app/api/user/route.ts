import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import User from "@/models/User";

/**
 * permet d'Avoir les information d'un user A PARTIR DE SON ID
 * @param request userID
 * @returns 
 */
export async function POST(request: Request) {

    await connectDB();

    try {
        const id = await request.json();
        
        const user= await User.findById(id.userId)



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