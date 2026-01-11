import Service from "@/components/Service";
import Pagination from "@/components/Pagination";
import { Post } from "@/types/Post";
import { data, p } from "framer-motion/client";
import Filter from "@/components/Filter";
import PublicationButton from "./PublicationButton";
// import Carousel from "@/components/Carousel";

interface MainFeedProps {
  searchParams: Promise<{
    page?: string;
    query?: string;
    limit?: string;
  }>;
}

export default async function MainFeed(
  { searchParams }: MainFeedProps
) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const searchParamsObj = await searchParams;

  const query = searchParamsObj.query || "";

  const currentPage = Number(searchParamsObj.page) || 1;
  const limit = 5;
  let totalPages = 1;
  let posts: Post[] = [];
  let totalPosts;

  try {
    const res = await fetch(`${baseUrl}/api/posts?page=${currentPage}&limit=${limit}&query=${query}`, { cache: "no-store" });

    if (!res.ok) {
      console.error("Erreur lors du fetch /api/posts:", res.status, await res.text());
    } else {
      const data = await res.json();
      posts = data.posts;
      totalPages = data.totalPages;
      totalPosts = data.total;
      console.log(totalPosts);

    }
  } catch (err) {
    console.error("Erreur inattendue lors du fetch ou du parsing JSON:", err);
  }

  const postsList = posts.map((post, index) => (
    <Service
      key={index}
      id={post._id}
      titre={post.title}
      description={post.description}
      image={post.image}
    />
  ));

  // const carouselPosts = posts.slice(0, (posts.length > 3 ? 3 : posts.length)).map(post => ({
  //   id: post._id!,
  //   title: post.title,
  //   image: post.image,
  // }));


  return (
    <div className="flex-grow m-3">
      <div className="flex flex-col items-center m-3">
        <h1 className="text-xl font-semibold mb-1">
          Services près de chez vous
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          {totalPosts} résultats trouvés
        </p>
        <div className="flex flex-col items-center m-3">
          {query && (
            <h2 className="text-2xl font-bold mb-4">
              Résultats pour : &quot;{query}&quot;
            </h2>
          )}

é
        </div>

        {/* <Carousel items={carouselPosts}></Carousel> */}

        <div className="flex ">

          <div className="flex flex-col gap-3">
            <Filter searchParams={searchParams}></Filter>

           <PublicationButton />

          </div>

          {postsList.length > 0 ? (
            <>
              <div className="flex flex-col gap-3" >
                {postsList}
                <div className="mt-6 mx-auto">
                  <Pagination currentPage={currentPage} totalPages={totalPages} />

                </div>
              </div>

            </>
          ) : (
            <p>Aucun service disponible pour le moment.</p>
          )}
        </div>

      </div>
    </div>
  );
}
