"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      const id = searchParams.get("token");

      if (!id) {
        setStatus("error");
        setMessage("Aucun identifiant fourni.");
        return;
      }

      try {
        const res = await fetch(`/api/register?token=${id}`, { method: "GET" });
        const data = await res.json();

        if (res.ok) {
          setStatus("success");
          setMessage(data.message || "Votre compte a été vérifié avec succès !");
        } else {
          setStatus("error");
          setMessage(data.message || "Échec de la vérification.");
        }
      } catch (error) { 
        setStatus("error");
        setMessage("Une erreur est survenue lors de la vérification.");
       
      }
    };

    verifyEmail();
  }, [searchParams]);

  if (status === "loading") {
    return <p>Vérification en cours...</p>;
  }

  if (status === "success") {
    return <p style={{ color: "green" }}>{message}</p>;
  }

  return <p style={{ color: "red" }}>{message}</p>;
}
