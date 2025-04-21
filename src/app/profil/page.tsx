import { cookies } from "next/headers"
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/Logout_button";


export default async function Profil() {

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        console.log("Aucun token trouvé. Redirection vers la page de login.");
        redirect('/login')
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!)


    const UserId = decoded.userId


    const res = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ UserId }),
    });

    const user = await res.json()


    return (
        <main className="flex flex-grow p-6">
            <div className="">
                <ul className="mb-20">
                    <li className="">
                        nom: {user.firstName}
                    </li>
                    <li>
                        prenom:  {user.lastName}
                    </li>
                    <li>
                        email: {user.email}
                    </li>
                    <li>
                        password: *********
                    </li>
                    <li>
                        phone number : {user.phone}
                    </li>
                </ul>
                <LogoutButton></LogoutButton>
            </div>


        </main>
    )

}