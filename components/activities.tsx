"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Compass, Mountain, Snowflake, Sun } from "lucide-react";
import { useTranslations } from "@/config/@next-intl";


export function Activities() {
  const t = useTranslations("landing");

  const activities = [
    {
      title: () => t('activities.hiking.title'),
      description: () => t('activities.hiking.description'),
      icon: Compass,
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306",
      season: () => t('activities.hiking.season')
    },
    {
      title: () => t('activities.alpinism.title'),
      description: () => t('activities.alpinism.description'),
      icon: Mountain,
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851",
      season: () => t('activities.alpinism.season')
    },
    {
      title: () => t('activities.skiing.title'),
      description: () => t('activities.skiing.description'),
      icon: Snowflake,
      image: "https://images.unsplash.com/photo-1551524559-8af4e6624178",
      season: () => t('activities.skiing.season')
    },
    {
      title: () => t('activities.wildlife.title'),
      description: () => t('activities.wildlife.description'),
      icon: Sun,
      image: "https://images.unsplash.com/photo-1484920274317-87885fcbc504",
      season: () => t('activities.wildlife.season')
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('activities.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('activities.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={activity.image}
                  alt={activity.title()}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <activity.icon className="w-8 h-8 mb-2" />
                <h3 className="text-xl font-bold mb-2">{activity.title()}</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {activity.description()}
                </p>
                <span className="inline-block mt-2 text-sm bg-white/20 px-3 py-1 rounded-full">
                  {activity.season()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}