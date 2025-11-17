"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function Home() {
  //const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


  return (
    <div className="flex-grow">
      <div className="flex flex-col items-center">
        {/* <h1 className="text-2xl font-bold m-3 mb-15">BIENVENUE SUR GO SERVICE</h1>

        <p className="text-lg text-gray-700 mb-6">
          GO-Service connecte les gens à des travailleurs locaux fiables, rapidement et chaleureux.
        </p> 
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">🛠️ À propos de GO-Service</h2>
            <p className="text-base md:text-lg">
              GO-Service est une plateforme conçue pour connecter rapidement les clients avec des prestataires fiables partout au Canada.
              Que ce soit pour un déménagement, un service de nettoyage, une réparation ou une aide ponctuelle, nous facilitons la mise en
              relation en quelques clics et mettons l’accent sur la simplicité et la confiance.
            </p>
        
        */}

        <motion.div
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}   
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full md:h-144  rounded-2xl  shadow-lg mb-6"
        >
          <Image
            src="/image/homePics/photoGens.avif"
            alt="À propos de GO-Service"
            fill
            className="object-cover object-center "
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div></div>

          <div className="relative p-8 md:p-12 text-white top-1/2">
            <h2 className="text-2xl md:text-5xl font-bold mb-4 text-center">BIENVENUE SUR GO SERVICE</h2>
            <p className="text-base md:text-2xl text-center">
              GO-Service est une plateforme conçue pour connecter rapidement les clients avec des prestataires fiables partout au Canada.
              Que ce soit pour un déménagement, un service de nettoyage, une réparation ou une aide ponctuelle, nous facilitons la mise en
              relation en quelques clics et mettons l’accent sur la simplicité et la confiance.
            </p>
          </div>
        </motion.div>
        <div>

        </div>


        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-6 mt-6 rounded-2xl bg-white shadow-md w-full md:w-1/2"
        >
          <Image
            src="/image/homePics/photoGens.avif"
            alt="How it works"
            width={600}
            height={400}
            className="w-full h-auto mb-4 rounded-lg"
          >
          </Image>
          <h2 className="text-xl font-semibold mb-2">Comment ça fonctionne</h2>
          <p className="text-gray-600">
            Parcourez les services disponibles, filtrez selon vos besoins et trouvez instantanément un prestataire proche de chez vous.
            Chaque annonce inclut une description claire, un tarif et une localisation afin de vous aider à prendre la meilleure décision.
            Notre plateforme est pensée pour être rapide, intuitive et efficace.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-6 mt-6 rounded-2xl bg-white shadow-md w-full md:w-1/2"
        >
          <Image
            src="/image/homePics/ramasseOrdure.jpg"
            alt="How it works"
            width={600}
            height={400}
            className="w-full h-auto mb-4 rounded-lg"

          >


          </Image>
          <h2 className="text-xl font-semibold mb-2">Nos engagements</h2>
          <p className="text-gray-600">
            Nous nous engageons à offrir une expérience sécurisée, transparente et professionnelle. GO-Service valorise la qualité, la fiabilité et le respect entre clients et prestataires.
            Notre objectif : rendre vos démarches plus simples et vous aider à trouver l’aide dont vous avez besoin, au moment où vous en avez besoin.
          </p>
        </motion.div>


      </div>
    </div>
  );
}
