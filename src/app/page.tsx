import Service from "@/components/Service";
import { Post } from "@/types/Post";

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  let posts: Post[] = [];

  try {
    const res = await fetch(`${baseUrl}/api/posts`, { cache: "no-store" });

    if (!res.ok) {
      console.error("Erreur lors du fetch /api/posts:", res.status, await res.text());
    } else {
      posts = await res.json();
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

  return (
    <main className="flex-grow m-3">
      <div className="flex flex-col items-center m-3">
        <h5 className="text-2xl font-bold m-3 mb-15">BIENVENUE SUR GO SERVICE</h5>

        {postsList.length > 0 ? (
          postsList
        ) : (
          <p>Aucun service disponible pour le moment.</p>
        )}
      </div>
    </main>
  );
}
