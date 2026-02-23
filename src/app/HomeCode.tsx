"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LoginComponent from "@/components/ui/LoginComponent";
import { div } from "framer-motion/client";
import { once } from "events";

export default function HomeCode() {

  const statSection = [
    {
      title: "1000+",
      description: "Utilisateurs satisfaits"
    },
    {
      title: "500+",
      description: "Prestataires disponibles"
    },
    {
      title: "4.8/5",
      description: "Note moyenne des utilisateurs"
    }

  ]

  return (
    <div className="flex-grow">
      <div className="flex flex-col items-center">

        {/* HERO SECTION */}
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


        {/* 1er SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative mt-6 bg-white shadow-md w-full overflow-hidden 
             flex flex-col md:flex-row"
        >

          <div className="flex-1 flex items-center justify-center md:justify-end 
                  bg-[#4a4e69] p-8 md:pr-12">
            <div className="max-w-xl text-center md:text-right text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Comment ça fonctionne
              </h2>

              <p className="text-base md:text-2xl ">
                Parcourez les services disponibles, filtrez selon vos besoins et trouvez instantanément un prestataire proche de chez vous.
                Chaque annonce inclut une description claire, un tarif et une localisation afin de vous aider à prendre la meilleure décision.
                Notre plateforme est pensée pour être rapide, intuitive et efficace.      </p>

              <Link href="MainFeed">
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white 
                           rounded-lg transition-all duration-200
                           hover:bg-white hover:text-blue-600 
                           hover:shadow-lg">
                  Voir les offres
                </button>
              </Link>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 h-64 md:h-auto">
            <Image
              src="/image/homePics/poigneeSerree.jpeg"
              alt="How it works"
              fill
              className="object-cover object-center"
            />
          </div>
        </motion.div>

        {/* 2e SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mt-12 bg-white shadow-md w-full overflow-hidden 
             flex flex-col md:flex-row-reverse"
        >

          <div className="flex-1 flex items-center justify-center md:justify-start 
                  bg-[#4a4e69] p-8 md:pl-12">
            <div className="max-w-xl text-center md:text-left text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Nos engagements
              </h2>

              <p className="text-base md:text-xl">
                Nous nous engageons à offrir une expérience sécurisée, transparente et professionnelle.
                GO-Service valorise la qualité, la fiabilité et le respect entre clients et prestataires.
                Notre objectif : rendre vos démarches plus simples et vous aider à trouver l’aide
                dont vous avez besoin, au moment où vous en avez besoin.
              </p>

              <Link href="about">
                <button
                  className="mt-6 px-6 py-3 
                     bg-blue-600 text-white 
                     rounded-lg 
                     transition-all duration-200
                     hover:bg-white hover:text-blue-600 
                     hover:shadow-lg"
                >
                  À propos de nous
                </button>
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto">
            <Image
              src="/image/homePics/ramasseOrdure.jpg"
              alt="Nos engagements"
              fill
              className="object-cover object-center"
            />
          </div>

        </motion.div>

        {/* STATS SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#22223b] text-white py-20 w-full  flex flex-col items-center"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
              GO-Service en chiffres
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center mt-10 w-full">
              {
                statSection.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center">
                    <span className="text-4xl md:text-6xl font-extrabold text-blue-600">
                      {stat.title}
                    </span>
                    <p className="mt-4 text-lg md:text-xl text-gray-300">
                      {stat.description}
                    </p>
                  </div>
                )
                )
              }
            </div>
          </div>
        </motion.div>

        {/* WHY CHOOSE US SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 text-black dark:text-white py-24 w-full "
        >
          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Pourquoi nous faire confiance ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4  gap-12">


              <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
                <div className="text-5xl mb-6">🛡️</div>
                <h3 className="text-xl font-semibold mb-4">
                  Prestataires vérifiés
                </h3>
                <p className="text-gray-600  dark:text-gray-400">
                  Chaque prestataire est examiné afin de garantir fiabilité et professionnalisme.
                </p>
              </div>


              <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
                <div className="text-5xl mb-6">💳</div>
                <h3 className="text-xl font-semibold mb-4">
                  Paiement sécurisé
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Transactions protégées et processus transparent pour votre tranquillité.
                </p>
              </div>

              <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
                <div className="text-5xl mb-6">🎧</div>
                <h3 className="text-xl font-semibold mb-4">
                  Support réactif
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Une équipe disponible pour vous accompagner à chaque étape.
                </p>
              </div>

              <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
                <div className="text-5xl mb-6">⭐</div>
                <h3 className="text-xl font-semibold mb-4">
                  Avis authentiques
                </h3>
                <p className="text-gray-600  dark:text-gray-400">
                  Consultez les retours réels des clients avant de faire votre choix.
                </p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* SIGN IN SECTION */}
        <div className="flex flex-col md:flex-row items-center w-full px-4 mt-10 pt-10 pb-40 bg-[#e5e5e5]">
          <div className="w-full text-center dark:text-gray-950  md:w-1/2 md:text-right mb-8 md:mb-0">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-4">
              ENVIE DE FAIRE PARTIE DE L&apos;AVENTURE ?
            </h3>
            <p className="text-lg md:text-xl text-black-700">
              Connecte-toi et commence à aider — ou te faire aider — en un clic.
            </p>
          </div>
          <div className="w-px bg-black hidden mx-4 self-stretch  md:block"></div>
          <div className="w-full md:w-1/2 dark:text-gray-950 ">
            <div className="flex flex-col text-center " >
              <p>Je sais que vous n&apos;avez pas de compte voici de quoi vous connecter.</p>
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