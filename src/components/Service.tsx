
import Image from "next/image";
import Link from "next/link";
import React from "react";


interface ServiceProps {
  id: string,
  titre: string,
  description: string,
  image: string
}

export default function Service({ id, titre, description, image }: ServiceProps) {
  
  console.log(image)
  
  return (
<Link href={"/post/?id=" + id} className=" min-w-4xl max-w-[70%] w-full">
  <section className="flex flex-row border-1 rounded-lg m-1.5 p-3 shadow-lg bg-gray-50">
    <Image 
    src={image} 
    alt="invisible" 
    className="w-50 h-50" 
    width={50} 
    height={50} unoptimized/>
    <div className="w-full text-center">
      <h1 className="text-center font-bold text-xl mb-2">{titre}</h1>
      {description}
    </div>
  </section>
</Link>
  );
}
