import { cookies } from "next/headers"
import jwt, { JwtPayload } from "jsonwebtoken";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/Logout_button";
import Service from "@/components/Service";
import { Post } from "@/types/Post";


export default async function Profil() {

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        console.log("Aucun token trouvé. Redirection vers la page de login.");
        redirect('/login')
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!)

    let userId: string;

    if (typeof decoded === "object" && decoded !== null && "userId" in decoded) {
        userId = (decoded as JwtPayload).userId as string;
    } else {
        console.log("Token invalide ou mal formé.");
        redirect("/login");
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;



    const res = await fetch(`${baseUrl}/api/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
    });

    const user = await res.json()


    const res2 = await fetch(`${baseUrl}/api/owner_post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
    });

    const post: Post[] = await res2.json();

    const postsList = post.map((post, index) => (
        <Service
            key={index}
            id={post._id}
            titre={post.title}
            description={post.description}
            image={post.image}
        />
    ));

    return (
        <main className="flex flex-grow p-6">
            <div className="flex-grow">
                <div className="flex flex-row ">

                    <ul className="items-center p-5 ml-8 mr-12 mt-10 bg-gray-800 text-white rounded-2xl">
                        <li>nom: {user.firstName}</li>
                        <li>prenom: {user.lastName}</li>
                        <li>email: {user.email}</li>
                        <li>password: *********</li>
                        <li>phone number: {user.phone}</li>
                    </ul>

                    <div className="flex flex-grow flex-col items-center">
                        {postsList}
                    </div>
                </div>

                <div className="flex justify-center items-center mt-10">
                    <LogoutButton />
                </div>
            </div>





        </main>

    )

}