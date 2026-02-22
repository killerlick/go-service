"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileMenuHeaderProps {
    isAuthenticated: boolean;
}

export default function MobileMenuHeader({ isAuthenticated }: MobileMenuHeaderProps) {

    const pathname = usePathname();
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="md:hidden">

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                ☰
            </button>

            {
                isMenuOpen && (
                    <ul className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 py-4 shadow-lg z-15">
                        <li>
                            <Link href="/">Accueil</Link>
                        </li>
                        <li>
                            <Link href="/MainFeed">Voir les offres</Link>
                        </li>

                        {isAuthenticated && (
                            <li>
                                <Link href="/create_post">Creer post</Link>
                            </li>
                        )}

                        {!isAuthenticated && (
                            <li>
                                <Link href="/login">Connecter</Link>
                            </li>
                        )}

                        {isAuthenticated && (
                            <li>
                                <Link href="/profil">Profil</Link>
                            </li>
                        )}
                    </ul>
                )
            }


        </div>
    )


}