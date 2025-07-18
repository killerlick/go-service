import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import { redirect } from "next/navigation";
import CreatePostForm from "./CreatePostForm";

export default async function CreatePostPage() {
    const cookieStore = cookies();
    const token =  (await cookieStore).get("token")?.value;

    if (!token) {
        redirect('/login');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    let userId: string;

    if (typeof decoded === "object" && decoded !== null && "userId" in decoded) {
        userId = (decoded as JwtPayload).userId as string;
    } else {
        redirect("/login");
    }

    return <CreatePostForm userId={userId} />;
}
