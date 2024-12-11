"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const prices = {
  accommodation: [
    {
      type: "Dortoir",
      price: "35€",
      details: "par personne/nuit",
      includes: ["Couchage en dortoir collectif", "Couvertures fournies", "Accès aux sanitaires"]
    },
    {
      type: "Chambre double",
      price: "85€",
      details: "par chambre/nuit",
      includes: ["Chambre privative pour 2", "Linge de lit fourni", "Accès aux sanitaires"]
    }
  ],
  meals: [
    {
      type: "Demi-pension",
      price: "25€",
      details: "par personne",
      includes: ["Dîner montagnard", "Nuitée", "Petit-déjeuner continental"]
    },
    {
      type: "Petit-déjeuner",
      price: "9€",
      details: "par personne",
      includes: ["Boissons chaudes", "Pain frais", "Viennoiseries", "Confitures"]
    },
    {
      type: "Dîner",
      price: "19€",
      details: "par personne",
      includes: ["Entrée", "Plat principal", "Dessert"]
    }
  ],
  activities: [
    {
      type: "Randonnée guidée",
      price: "45€",
      details: "par personne",
      includes: ["Guide professionnel", "Équipement", "4-8 personnes"]
    },
    {
      type: "Location matériel",
      price: "15€",
      details: "par jour",
      includes: ["Bâtons de marche", "Raquettes (hiver)", "Casque"]
    }
  ]
};

export default function TarifsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Nos Tarifs
          </h1>

          {/* Hébergement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Hébergement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prices.accommodation.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{item.type}</h3>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-sky-400">{item.price}</span>
                      <p className="text-sm text-gray-600">{item.details}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {item.includes.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-sky-400 rounded-full mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Restauration */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Restauration</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {prices.meals.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{item.type}</h3>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-sky-400">{item.price}</span>
                      <p className="text-sm text-gray-600">{item.details}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {item.includes.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-sky-400 rounded-full mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Activités */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Activités</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prices.activities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{item.type}</h3>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-sky-400">{item.price}</span>
                      <p className="text-sm text-gray-600">{item.details}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {item.includes.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-sky-400 rounded-full mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-sky-50 rounded-lg p-6 mb-8"
          >
            <div className="flex items-start">
              <Info className="w-6 h-6 text-sky-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Informations importantes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Les tarifs sont donnés à titre indicatif et peuvent varier selon la saison</li>
                  <li>• Réduction de 10% pour les groupes de plus de 8 personnes</li>
                  <li>• Gratuit pour les enfants de moins de 5 ans</li>
                  <li>• Taxe de séjour non incluse (0,80€ par personne et par nuit)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <div className="text-center">
            <Button asChild className="bg-sky-400 hover:bg-sky-500">
              <Link href="/reservation">
                Réserver maintenant
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}