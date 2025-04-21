import connectDB from "@/lib/connectDB";
import bcrypt from "bcrypt"
import User from "@/models/User"
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    await connectDB()

    try {

        const { firstName, lastName, email, password, phone } = await request.json()

        const existingUser = await User.findOne({ email })
        if (existingUser) {
          return  NextResponse.json({ message: "Email deja utilisé" }, { status: 409 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)



        const createdUser = await User.create(
            {
                firstName,
                lastName,
                email,
                password: hashedPassword,
                phone,
                isVerified:false,
                role:"user",
                createAt : new Date(),
                updateAt : new Date()
            }
        )

        return NextResponse.json({ message: "Utilisateur créé", userId: createdUser._id }, { status: 201 });
    } catch (e) {
        console.error("Erreur lors de la création de l'utilisateur :", e);
        return NextResponse.json({ error: "Échec de la création du compte" }, { status: 500 });
   
    }



}