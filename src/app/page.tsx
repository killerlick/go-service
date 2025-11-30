
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import HomeCode from "./HomeCode";

export default async function Home() {
  //const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const token = (await cookies()).get("token")?.value;
  if (token) redirect("/MainFeed");


  return (
    <HomeCode/>
  );
}
