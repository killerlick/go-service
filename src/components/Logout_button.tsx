"use client"

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  return (
    <button onClick={handleLogout} 
    className="p-2 bg-red-500 text-white rounded hover:underline">
      Déconnexion
    </button>
  );
}