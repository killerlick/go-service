
import Service from "@/components/Service";
import { Post } from "@/types/Post"
import { exit } from "process";



export default async function Home() {



  const res = await fetch("http://localhost:3000/api/posts", { cache: "no-store" });

  const posts:Post[] = await res.json();


 
  const postsList = posts.map((post, index) =>(
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
      <div className="flex flex-col items-center   m-3">
        <h5 className="text-2xl font-bold m-3 mb-15">BIENVENUE SUR GO SERVICE</h5>

        {postsList}
      </div>
    </main>
  );
}

