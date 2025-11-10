import Service from "@/components/Service";
import Pagination from "@/components/Pagination";
import { Post } from "@/types/Post";
import Carousel from "@/components/Carousel";

interface HomeProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function Home(
  { searchParams }: HomeProps 
) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const searchParamsObj = await searchParams;

  const currentPage =  Number(searchParamsObj.page) || 1;
  console.log("Page actuelle:", currentPage);
  const limit = 5;
  let totalPages = 1; 

  let posts: Post[] = [];

  try {
    const res = await fetch(`${baseUrl}/api/posts?page=${currentPage}&limit=${limit}`, { cache: "no-store" });

    if (!res.ok) {
      console.error("Erreur lors du fetch /api/posts:", res.status, await res.text());
    } else {
      const data  = await res.json();
      posts = data.posts;
      totalPages = data.totalPages;
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

  const carouselPosts = posts.slice(0, (posts.length > 3 ? 3 : posts.length)).map(post => ({
    id: post._id!,
    title: post.title,
    image: post.image,
  }));

  return (
    <main className="flex-grow m-3">
      <div className="flex flex-col items-center m-3">
        <h5 className="text-2xl font-bold m-3 mb-15">BIENVENUE SUR GO SERVICE</h5>
        <Carousel items={carouselPosts}></Carousel>

        {postsList.length > 0 ? (<>
        {postsList}
        <Pagination currentPage={currentPage} totalPages={totalPages} />
        </> 
        ) : (
          <p>Aucun service disponible pour le moment.</p>
        )}
      </div>
    </main>
  );
}
