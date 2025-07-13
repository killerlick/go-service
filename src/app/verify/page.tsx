import { Suspense } from "react";
import VerifyClient from "./VerifyClient";

export default function VerifyPage() {
  return (
    <Suspense fallback={<p>Chargement de la vérification...</p>}>
      <VerifyClient />
    </Suspense>
  );
}
