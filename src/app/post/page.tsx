
interface SearchPageProps {
  searchParams: Promise<{ id?: string }>; // ✅ searchParams as a Promise
}

export default async function Page({ searchParams  }: SearchPageProps) {

  const id = await searchParams;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";


  const res = await fetch(`${baseUrl}/api/posts/?id=` + id.id, { cache: "no-store" })
  const post = await res.json();

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>

    </div>);
}
