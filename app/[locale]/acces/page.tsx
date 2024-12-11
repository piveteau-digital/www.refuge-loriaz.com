"use client";

import { motion } from "framer-motion";
import { Car, Train, Mountain, Info } from "lucide-react";
import Image from "next/image";

const accessMethods = [
  {
    icon: Car,
    title: "En voiture",
    description: "Depuis Chamonix, prenez la D1506 direction Vallorcine. Parking au Col des Montets.",
    details: [
      "Parking gratuit au Col des Montets",
      "45 minutes depuis Chamonix",
      "1h30 depuis Genève"
    ]
  },
  {
    icon: Train,
    title: "En train",
    description: "Gare SNCF de Vallorcine, puis navette ou taxi jusqu'au départ du sentier.",
    details: [
      "TER depuis Chamonix ou Martigny",
      "Service de navette en saison",
      "Taxis disponibles sur réservation"
    ]
  },
  {
    icon: Mountain,
    title: "À pied",
    description: "2h de marche depuis le Col des Montets par un sentier balisé.",
    details: [
      "Dénivelé : 700m",
      "Difficulté : moyenne",
      "Balisage : jaune"
    ]
  }
];

export default function AccessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          alt="Accès au Refuge de Loriaz"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Comment venir ?</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              Toutes les informations pour accéder au Refuge de Loriaz
            </p>
          </div>
        </div>
      </div>

      {/* Access Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accessMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <method.icon className="w-12 h-12 text-sky-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <ul className="space-y-2">
                  {method.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-sky-400 rounded-full mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Notre localisation</h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyASzqnCrYBWXhFtdlXXBg_KCLxQTa1I5Y4&q=46.03906951%2C6.91325202794&center=46.0236893114%2C6.90089509101&zoom=14&maptype=satellite"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-sky-50 rounded-lg p-6 flex items-start"
            >
              <Info className="w-6 h-6 text-sky-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Informations importantes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{"• Prévoir de bonnes chaussures de marche"}</li>
                  <li>{"• Vérifier la météo avant de partir"}</li>
                  <li>{"• Emporter de l'eau et des en-cas"}</li>
                  <li>{"• Le refuge n'est pas accessible en voiture"}</li>
                  <li>{"• En hiver, équipement adapté obligatoire"}</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}