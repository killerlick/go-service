import { cookies } from "next/headers";
import jwt, {  JwtPayload } from "jsonwebtoken";

interface authCookiePyload extends JwtPayload {
    userId: string;
    email: string;
}

// Cette fonction vérifie le cookie d'authentification et retourne l'ID de l'utilisateur s'il est valide, sinon elle retourne null.
export default async function verify_cookie() {

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    let user_id = null;

    if (token) {

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET!);
            user_id = (decoded as authCookiePyload).userId;
        } catch (err) {
            console.log("Token invalide ou expiré" + err);
            return null;
        }
    }




    return user_id;
}