// app/search/page.tsx

import { Post } from "@/types/Post";

type SearchPageProps = {
  searchParams: Promise<{
    query?: string;
    page?: string;
    limit?: string;

    maxPrice?: string;
    minPrice?: string;

    category?: string;
    zone?: string;

  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { query = "", maxPrice = "", minPrice = "", limit = "", page = "1", category = "", zone = "" } = await searchParams

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className="flex items-start m-3 gap-6">

        <form method="GET" action="/MainFeed" 
        className="bg-[#1e2939] p-4 rounded-xl shadow-md md:w-64 flex-shrink-0 text-white">
          <input type="hidden" name="query" value={query}></input>
          <input type="hidden" name="page" value="1"></input>
          <input type="hidden" name="limit" value={limit}></input>

          <h3 className="text-lg font-semibold mb-4 text-white" >Filtres</h3>

          <div className="mb-4">
            <label className="block font-medium mb-1">Prix minimum</label>
            <input type="number" name="minPrice" className="w-full p-2 rounded bg-white text-black hover:bg-gray-100 transition" defaultValue={minPrice} />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Prix maximum</label>
            <input type="number" name="maxPrice" className="w-full p-2 rounded bg-white text-black hover:bg-gray-100 transition" defaultValue={maxPrice} />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Catégorie</label>
            <select name="category" className="w-full p-2 rounded bg-white text-black hover:bg-gray-100 transition" defaultValue={category}>
              <option value="">Toutes</option>
              <option value="Plomberie">Physique</option>
              <option value="Électricité">Technologie</option>
              <option value="Jardinage">Don</option>
              <option value="Ménage">Ménage</option>
              <option value="Informatique">surveillance</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Zone</label>
            <select
              name="zone"
              defaultValue={zone}
              className="w-full p-2 rounded bg-white text-black hover:bg-gray-100  transition"
            >
              <option value="">Toutes</option>
              <option value="nord">Nord</option>
              <option value="sud">Sud</option>
              <option value="est">Est</option>
              <option value="ouest">Ouest</option>
            </select>
          </div>

          {/* Bouton pour appliquer */}
          <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Appliquer
          </button>


        </form>
      
    </div>
  );
}
