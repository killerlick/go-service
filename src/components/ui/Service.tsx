import Image from "next/image";
import Link from "next/link";
interface ServiceProps {
  id: string,
  titre: string,
  description: string,
  image: string
}
export default function Service({ id, titre, description, image }: ServiceProps) {
  return (
    <Link
      href={"/post/?id=" + id}
      className=" block">
      
      <section className="flex flex-row border-1 rounded-lg m-1.5 p-3 shadow-lg bg-white hover:bg-gray-50 transition
">
        <Image
          src={image}
          alt="invisible"
          className="w-50 h-50 object-cover rounded-lg mr-4"
          width={200}
          height={120} 
          unoptimized />

        <div className="flex flex-col justify-between w-full">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {titre}
            </h2>

            <p className="text-gray-700 mt-1 line-clamp-2">
              {description}
            </p>
          </div>

          <span className="text-sm text-blue-700 mt-2">
            Voir l’annonce →
          </span>
        </div>
      </section>
    </Link>
  );
}