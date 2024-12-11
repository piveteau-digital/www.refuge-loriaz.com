"use client";

import { motion } from "framer-motion";
import { Coffee, Utensils, Compass, Mountain, Bed, Package } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Demi-pension",
    description: "Profitez d'un séjour tout compris avec dîner et petit-déjeuner",
    icon: Package,
    details: [
      "Dîner montagnard traditionnel",
      "Nuitée en dortoir ou chambre",
      "Petit-déjeuner continental copieux"
    ]
  },
  {
    title: "Petit-déjeuner",
    description: "Démarrez votre journée avec un petit-déjeuner énergétique",
    icon: Coffee,
    details: [
      "Pain frais et viennoiseries",
      "Confitures maison",
      "Boissons chaudes",
      "Céréales et fruits"
    ]
  },
  {
    title: "Dîner",
    description: "Savourez une cuisine traditionnelle de montagne",
    icon: Utensils,
    details: [
      "Spécialités savoyardes",
      "Produits locaux",
      "Menu végétarien disponible",
      "Vin de Savoie"
    ]
  },
  {
    title: "Hébergement",
    description: "Un refuge confortable pour votre séjour en altitude",
    icon: Bed,
    details: [
      "Dortoirs collectifs",
      "Chambres privatives",
      "Douches chaudes",
      "Casiers sécurisés"
    ]
  },
  {
    title: "Randonnées guidées",
    description: "Découvrez les plus beaux sentiers avec nos guides",
    icon: Compass,
    details: [
      "Circuits adaptés à tous niveaux",
      "Guides professionnels",
      "Équipement fourni",
      "Groupes de 4 à 8 personnes"
    ]
  },
  {
    title: "Services additionnels",
    description: "Des prestations pour enrichir votre expérience",
    icon: Mountain,
    details: [
      "Pique-niques à emporter",
      "Location de matériel",
      "Séances photo",
      "Formations alpines"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          alt="Services au Refuge de Loriaz"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              Découvrez tout ce que le Refuge de Loriaz peut vous offrir pour un séjour inoubliable
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <service.icon className="w-12 h-12 text-sky-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-sky-400 rounded-full mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}