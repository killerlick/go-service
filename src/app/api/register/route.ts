import connectDB from "@/lib/connectDB";
import bcrypt from "bcrypt"
import User from "@/models/User"
import { NextResponse } from "next/server";
import { sendVerificationEmail } from "@/lib/sendVerificatiionEmail";

export async function GET(request : Request){

    await connectDB()

    try{

        const url = new URL(request.url);
        const id = url.searchParams.get("token")

        if(!id){
            return NextResponse.json({ message: "ID manquant" }, { status: 400 });

        }

        const user = await User.findById(id);

        if (!user) {
            return NextResponse.json({ message: "Utilisateur introuvable" }, { status: 404 });
          }
      
          if (user.isVerified) {
            return NextResponse.json({ message: "Utilisateur déjà vérifié" }, { status: 400 });
          }

          user.isVerified = true;
          user.updateAt = new Date();
          await user.save();

        return NextResponse.json({message:"urilisasteur verifier avec succes"} , {status:200})

    }catch(e){
        return NextResponse.json({message:e} , {status:500})
    }

}

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

        const verificationToken = createdUser._id.toString();

        console.log(email)
        console.log(verificationToken)

        await sendVerificationEmail(email, verificationToken);



        return NextResponse.json({ message: "Utilisateur créé", userId: createdUser._id }, { status: 201 });
    } catch (e) {
        console.error("Erreur lors de la création de l'utilisateur :", e);
        return NextResponse.json({ error: "Échec de la création du compte" }, { status: 500 });
   
    }



}