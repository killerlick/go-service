// components/Header.tsx
import Link from "next/link";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import Image from "next/image";

export default async function Header() {

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
//  console.log("token:          " + token)

  let isAuthenticated = false;
  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET!);
      isAuthenticated = true;
    } catch (err) {
      console.log("Token invalide ou expiré" + err);
    }
  }

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" >
          <h1 className="text-xl font-bold">GO-Service</h1>
        </Link>


        <div className="flex-grow max-w-md mx-10">

          <label htmlFor="search" className="sr-only">
            Rechercher
          </label>
          <form method="GET" action="/search" className="flex flex-row">
            <input
              id="search"
              name="query"
              type="text"
              placeholder="Rechercher..."
              className="w-full bg-white p-2 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            /><button type="submit" className="ml-2 p-2 bg-blue-500 rounded-xl hover:bg-blue-600">
              <Image src="/search-icon.svg" className=" w-6 h-6" width={6} height={6} alt={"search icon"}></Image>
            </button>
          </form>

        </div>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="hover:underline">
              Accueil
            </Link>
          </li>


          <li>
            <Link href="/about" className="hover:underline">
              À propos
            </Link>
          </li>

          {
            isAuthenticated && (
              <li>
                <Link rel="stylesheet" href="/create_post" >
                  Creer post
                </Link>
              </li>
            )
          }
          {
            !isAuthenticated && (
              <li>
                <Link href="/login" className="hover:underline" >
                  connecter
                </Link>
              </li>
            )
          }
          {
            isAuthenticated && (
              <li>
                <Link href="/profil" >
                profil
                </Link>
              </li>
            )
          }

        </ul>
      </nav>
    </header>
  );
}
