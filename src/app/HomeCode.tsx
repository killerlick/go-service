"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LoginComponent from "@/components/LoginComponent";

export default function HomeCode() {

return(

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
          className="relative w-full  md:h-144  rounded-2xl  shadow-lg mb-6"
        >
          <Image
            src="/image/homePics/photoGens.avif"
            alt="À propos de GO-Service"
            fill
            className="object-cover object-center "
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative p-8 md:p-12 text-white top-1/2">
            <h2 className="text-2xl md:text-5xl font-bold mb-4 text-center">BIENVENUE SUR GO SERVICE</h2>
            <p className="text-base md:text-2xl text-center">
              GO-Service est une plateforme conçue pour connecter rapidement les clients avec des prestataires fiables partout au Canada.
              Que ce soit pour un déménagement, un service de nettoyage, une réparation ou une aide ponctuelle, nous facilitons la mise en
              relation en quelques clics et mettons l’accent sur la simplicité et la confiance.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mt-6 bg-white shadow-md h-144 w-full overflow-hidden flex"
        >
          <div className="relative flex-1 flex items-center justify-end pr-6 bg-[#4a4e69]">
            <div className="max-w-[60%] text-right text-white z-10">
              <h2 className="text-2xl md:text-5xl font-bold mb-4">
                Comment ça fonctionne
              </h2>
              <p className="text-base md:text-2xl">
                Parcourez les services disponibles, filtrez selon vos besoins et trouvez instantanément un prestataire proche de chez vous.
                Chaque annonce inclut une description claire, un tarif et une localisation afin de vous aider à prendre la meilleure décision.
                Notre plateforme est pensée pour être rapide, intuitive et efficace.
              </p>
              <Link href="MainFeed">
                <button className="
                    mt-4 px-5 py-2 
                   bg-blue-600 text-white 
                   rounded-lg 
                  transition-all duration-200
                 hover:bg-white hover:text-blue-600
                    hover:shadow-lg
                    ">
                  voir les offres
                </button>
              </Link>

            </div>

          </div>
          <div className="relative w-1/2 h-full">

            <Image
              src="/image/homePics/poigneeSerree.jpeg"
              alt="How it works"
              fill
              className="object-cover object-center 
              [mask-image:linear-gradient(to_left,transparent,black)]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-white/10 pointer-events-none z-0"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mt-6 bg-white shadow-md h-144 w-full overflow-hidden flex"
        >
          <div className="relative flex-1 flex items-center justify-end bg-[#4a4e69] pr-6">
            <div className="max-w-[60%] text-right text-white z-10">
              <h2 className="text-2xl md:text-5xl font-bold mb-4">
                Nos engagements              </h2>
              <p className="text-base md:text-2xl">
                Nous nous engageons à offrir une expérience sécurisée, transparente et professionnelle. GO-Service valorise la qualité, la fiabilité et le respect entre clients et prestataires.
                Notre objectif : rendre vos démarches plus simples et vous aider à trouver l’aide dont vous avez besoin, au moment où vous en avez besoin.
              </p>
              <Link href="about">
                <button className="
                    mt-4 px-5 py-2 
                   bg-blue-600 text-white 
                   rounded-lg 
                  transition-all duration-200
                 hover:bg-white hover:text-blue-600
                    hover:shadow-lg
                    ">
                  A propos de nous</button>
              </Link>

            </div>

          </div>
          <div className="relative w-1/2 h-full">

            <Image
              src="/image/homePics/ramasseOrdure.jpg"
              alt="How it works"
              fill
              className="object-cover object-center 
              [mask-image:linear-gradient(to_left,transparent,black)]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-white/10 pointer-events-none z-0"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center w-full px-4 mt-10 pt-10 pb-40 bg-[#e5e5e5]">
          <div className="w-full md:w-1/2 text-right mb-8 md:mb-0">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-4">
              ENVIE DE FAIRE PARTIE DE L&aposAVENTURE ?
            </h3>
            <p className="text-lg md:text-xl text-gray-700">
              Connecte-toi et commence à aider — ou te faire aider — en un clic.
            </p>
          </div>
          <div className="w-px bg-black mx-4 self-stretch hidden md:block"></div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col text-center " >
              <p>je sais que vous n&aposavez pas de compte voici de quoi vous connecter.</p>
              <p>email : testUser20@gmail.com</p>
              <p>mot de passe : 123ABCDEFGHI???</p>
            </div>
            <LoginComponent />
          </div>
        </div>


      </div>
    </div>

)





}