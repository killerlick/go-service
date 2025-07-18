"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Home() {


    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValidUser, setIsValidUser] = useState(true)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        if (res.ok) {
            alert("connection");
            setEmail("");
            setPassword("");
            router.push("/");
            router.refresh();

        } else {
            setIsValidUser(false)
        }

    };

    return (

        

        <main className="flex flex-col flex-grow justify-center items-center min-h-screenm-3">
<p>

                biensur , cest pas un vrai vrai site , donc en theorie tu ne devrais pas pouvoir enregistrer un compte <br />
                Tiens un compte utilisable <br />
<br />
                email : testUser@gmail.com
<br />
                mot de passe : 123ABCDEFGHI???

</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">

                {
                    !isValidUser && (
                        <p className="text-red-500 text-sm mb-4">
                            Email ou mot de passe incorrect
                        </p>

                    )
                }
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`border p-2 rounded m-1 ${!isValidUser ? "border-red-500" : ""}`}
                />

                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`border p-2 rounded m-1 ${!isValidUser ? "border-red-500" : ""}`}
                />

                <button type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-600"
                >login</button>
            </form>

            <div className=" flex flex-col justify-center items-center  m-5">
                <p>pas de compte ? inscris-vous</p>
                <Link href="/register" className="w-full">
                <button
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-600 w-full "
                >
                    inscription
                </button>

                </Link>
            </div>

        </main>
    );
}

