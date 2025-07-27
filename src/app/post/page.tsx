import DeletePostButton from "@/components/DeletePostButton";
import ModifyPostButton from "@/components/ModifyPostButton";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import Image from "next/image";



interface SearchPageProps {
  searchParams: Promise<{ id?: string }>;
}

export default async function Page({ searchParams }: SearchPageProps) {

  const id = await searchParams;
  let userId: string | null = null;
  let user

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/posts/?id=` + id.id, { cache: "no-store" })
  const post = await res.json();

  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;


  if (typeof token === "string") {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      if (typeof decoded === "object" && decoded !== null && "userId" in decoded) {
        userId = (decoded as JwtPayload).userId as string;
      }

    } catch (err) {
      console.error("Token invalide ou expiré  " + err);
    }
  } else {
    console.warn("Token absent");
  }


    const res2 = await fetch(`${baseUrl}/api/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId : post.user_id })
    }
    )
    user = await res2.json()
  

  console.log(post)



  return (
    <div className="flex flex-col m-6">
      <div className="flex flex-row justify-center">
        <div className="relative flex flex-col items-center text-center m-2 mx-8 p-4 rounded border bg-gray-50 w-full">

          <Image
            height={500}
            width={500}
            src={post.image}
            alt={"invisible"} >
          </Image>

          <h2 className="font-bold text-6xl mt-4">{post.title}</h2>

          <p className=" mt-4 mb-6">{post.description}</p>

          <span className="absolute bottom-2 right-4 text-sm text-gray-500 m-1">
            cree le
          </span>

        </div>

        <div className="flex flex-col m-2 p-4 rounded border bg-gray-100 w-1/3 h-fit ml-6 mr-20 " >
          <ul >
            <p className="font-bold">info Utilisateur</p>
            <li>{user.firstName} {user.lastName}</li>
            <li></li>
          </ul>


        </div>

      </div>

      <div className="text-center">
        {userId !== null &&
          (userId == post.user_id) &&
          ( <DeletePostButton
            post_id={id.id as string}
            userId={userId}
          ></DeletePostButton>)} 
          {userId !== null &&
          (userId == post.user_id) &&(
        <ModifyPostButton 
        id={id.id as string} 
        titre={post.title} 
        description={post.description}>
        </ModifyPostButton>)
        

        }
      </div>







    </div>);
}
