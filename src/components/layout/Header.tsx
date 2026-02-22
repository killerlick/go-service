// components/Header.tsx
import Link from "next/link";
import MobileMenuHeader from "./MobileMenuHeader";
import Image from "next/image";
import verify_cookie from "@/lib/verify_cookie";

export default async function Header() {



  let isAuthenticated = false;
  let result = await verify_cookie();
  
  if(result != null){
    isAuthenticated = true;
  }


  return (
    <header className="bg-gray-800 text-white p-4 shadow-md shadow-black">
      <nav className="container mx-auto flex justify-between items-center md:flex">
        <Link href="/" className="md:flex" >
          <h1 className="text-xl font-bold">GO-Service</h1>
        </Link>


        <div className="flex-grow max-w-md mx-10">

          <form method="GET" action="/MainFeed" className="flex flex-row">
            <input
              id="search"
              name="query"
              type="text"
              placeholder="Rechercher..."
              className="w-full bg-white p-2 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="hidden md:flex ml-2 p-2 bg-blue-500 rounded-xl hover:bg-blue-600">
              <Image src="/search-icon.svg" className=" w-6 h-6" width={6} height={6} alt={"search icon"}></Image>
            </button>
          </form>

        </div>

        <ul className="hidden md:flex gap-4">
          <li>
            <Link href="/" className="hover:underline">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/MainFeed" className="hover:underline" >
              Voir les offres
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

        <MobileMenuHeader isAuthenticated={isAuthenticated} />
      </nav>
    </header>
  );
}
