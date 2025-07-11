import connectDB from "@/lib/connectDB";
import User from "@/models/User"
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

import { cookies } from "next/headers";

export const dynamic = "force-dynamic";



export async function POST(request: Request) {
    await connectDB();

    try {
        const { email, password } = await request.json();

        const user = await User.findOne(
            {
                email: email
            }
        )

        if (!user) {
            return NextResponse.json({ message: "email ou password incorrect" }, { status: 401 });
        }

        const isPasswordValid = await bcrypt.compare(password , user.password)
       
        if(!isPasswordValid){
            return NextResponse.json({ message: "email ou password incorrect" }, { status: 401 });
        }

            if(!user.isVerified){
                return NextResponse.json({message : "user non verifié"} , {status:501})
            }

        const token = jwt.sign(
            {userId : user._id , email: user.email},
            process.env.JWT_SECRET!,
            {expiresIn: "1d"}
        ) 

        const cookieStore = await cookies();

        cookieStore.set({
            name: "token",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 24, // 1 jour
          });

        return NextResponse.json({ message: "bon uSer" }, { status: 200 });

    } catch (error) {
        console.error("Erreur création post:", error);
        return NextResponse.json({ error: "Échec de la création du post" }, { status: 500 });
    }
}
