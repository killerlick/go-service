

import Service from "@/components/Service";
import connectDB from "@/lib/connectDB";
import Post from "@/models/Post";

export default async function Page({ params, searchParams, }: {
  params: { slug: string }; searchParams?: { [key: string]: string | string[] | undefined };
}) {

  const id = await searchParams?.id


  const res = await fetch("http://localhost:3000/api/posts/?id=" + id, { cache: "no-store" })
  const post: Post = await res.json();

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>

    </div>);
}
