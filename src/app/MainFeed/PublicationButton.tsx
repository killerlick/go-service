"use client";

import { useRouter } from "next/navigation";

export default function PublishButton() {

    const router = useRouter();
    const onClick = () => {
        router.push('/create_post');
    }


  return (
    <button
      onClick={onClick}
      className=" w-max mx-auto   text-2xl bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 hover:scale-105 transition-transform duration-100"
    >
      Publier une annonce
    </button>
  );
}
