// app/search/page.tsx

import { Post } from "@/types/Post";
import Service from "@/components/Service";

type SearchPageProps = {
  searchParams: Promise<{ 
    query?: string;
    maxPrice?: string;
    minPrice?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const {query = "" , maxPrice = "" , minPrice=""} = await searchParams

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";


  const res = await fetch(`${baseUrl}/api/search?query=`+query+"&minPrice=" +minPrice+"&maxPrice="+maxPrice, { cache: "no-store" });
  const posts: Post[] = await res.json();
  console.log("posts = " + JSON.stringify(posts, null, 2))

  const postsList = posts.map((post, index) => (
    <Service
      key={index}
      id={post._id}
      titre={post.title}
      description={post.description}
      image={post.image}
    />
  ));

  return (
    <main className="flex-grow m-3">

      <div className="flex items-start m-3 gap-6">

        <form method="GET" action="/search" className=" w-1/4 bg-gray-100 p-4 rounded-xl">
          <input type="hidden" name="query" value={query}></input>
          <h3 className="text-lg font-semibold mb-4" >Filtres</h3>

          <div className="mb-4">
            <label className="block font-medium mb-1">Prix minimum</label>
            <input type="number" name="minPrice" className="w-full p-2 rounded bg-white" defaultValue={minPrice}/>
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Prix maximum</label>
            <input type="number" name="maxPrice" className="w-full p-2 rounded bg-white" defaultValue={maxPrice}/>
          </div>

          {/* Bouton pour appliquer */}
          <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Appliquer
          </button>


        </form>

        <div className="flex flex-col items-center m-3">
          <h2 className="text-2xl font-bold mb-4">
            Résultats pour : &quot;{query}&quot;
          </h2>
          {postsList.length > 0 ? (postsList) : (
            <p>Aucun résultat trouvé.</p>
          )}
        </div>
      </div>

    </main>
  );
}
