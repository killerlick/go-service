"use client";
import { useRouter } from "next/navigation";

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const router = useRouter();



  const goToPage = (page: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set("page", page.toString());
    router.push(url.toString());
  };

  return (
    <div className="flex gap-2 mt-6">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400 hover:underline "
      >
        Précédent
      </button>

      <span className="px-4 py-2 border rounded">
        Page {currentPage} / {totalPages}
      </span>

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400 hover:underline "
      >
        Suivant
      </button>
    </div>
  );
}
