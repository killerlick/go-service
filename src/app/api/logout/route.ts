// src/app/api/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Déconnecté" });

  response.cookies.set("token", "", {
    httpOnly: true,
    expires: new Date(0), // expire immédiatement
  });

  return response;
}
