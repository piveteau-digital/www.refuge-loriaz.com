"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { useTranslations } from "@/config/@next-intl";

const testimonials = [
  {
    name: "Titine",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVpJ_F25xMCuDnGvB-b5IXAljdBYrntXltqSkocYxeLyLafLJK2=w36-h36-p-rp-mo-ba5-br100", // Vous devrez ajouter une image par défaut
    text: `J'y vais depuis un bon nombres d'années tous les été. On s'y sent bien on y est bien accueillis et on y mange bien. Leurs desserts sont aussi toujours très bon !!!!

Le chien de la cabane est une vraie peluche 😍`,
    rating: 5,
    date: "08/2024",
  },
  {
    name: "Greg Vo",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVqNyqyQRqJp_nstQcbObEYzMASuBiXCel8qy9A-aQG1N06gscR=w36-h36-p-rp-mo-br100",
    text: `Déjeuner à 9 (4 adultes et 5 enfants). Cadre grandiose, superbe vue, accueil super sympa, très bon service, déjeuner délicieux et fait maison avec un rapport qualité-prix au top.
Une des meilleures tartes au myrtille de la vallée et un thé glacé fait maison délicieux!
Bref on a tous adoré et hâte de venir déjeuner l'hiver`,
    rating: 5,
    date: "08/2020",
  },
  {
    name: "Véronique Fiévet",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVELRDiciCkNXTBm0vhArUBwUWGPCkafQ39Un6vNkghBYtVhq1X=w36-h36-p-rp-mo-br100",
    text: `J’ai déjeuné ce midi au refuge. Je vous le recommande, car il est idéalement situé, et n’utilise pas cet emplacement de choix pour profiter des touristes. L’accueil, la cuisine vraiment faite maison (et je m’y connais en pâte à tarte 😜), la propreté et le rapport qualité/prix méritent largement 5 étoiles.`,
    rating: 5,
    date: "08 / 2024",
  },
];

export function Testimonials() {
  const t = useTranslations("landing.testimonial");
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t("title")}</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <span className="text-lg font-semibold">{t("note.value")}</span>
          </div>
          <a
            href="https://www.google.com/maps/place/Refuge+de+Loriaz/@46.0389234,6.7605226,25705m/data=!3m1!1e3!4m15!1m2!2m1!1srefuge+de+loriaz!3m11!1s0x478eb3a36e8bac03:0xde979b0952a3522b!5m2!4m1!1i2!8m2!3d46.0389234!4d6.9129579!9m1!1b1!15sChByZWZ1Z2UgZGUgbG9yaWF6kgEMbW91bnRhaW5faHV04AEA!16s%2Fg%2F11g1tf6cg1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 hover:text-sky-700 transition-colors"
          >
            {t("note.suffix")}
          </a>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {testimonial.date}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Refuge+de+Loriaz/@46.0389234,6.7605226,25705m/data=!3m1!1e3!4m15!1m2!2m1!1srefuge+de+loriaz!3m11!1s0x478eb3a36e8bac03:0xde979b0952a3522b!5m2!4m1!1i2!8m2!3d46.0389234!4d6.9129579!9m1!1b1!15sChByZWZ1Z2UgZGUgbG9yaWF6kgEMbW91bnRhaW5faHV04AEA!16s%2Fg%2F11g1tf6cg1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3  text-base font-medium rounded-md hover:bg-sky-700 text-sky-700 border-2 border-sky-700 hover:text-white transition-colors btn btn-outline btn-primary"
          >
            {t("more")}
          </a>
        </div>
      </div>
    </section>
  );
}
