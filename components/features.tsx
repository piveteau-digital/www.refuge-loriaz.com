"use client";

import { motion } from "framer-motion";
import { Mountain, Utensils, Wifi, Coffee, Snowflake, Map } from "lucide-react";
import { t } from "@/lib/i18n";

const features = [
  {
    icon: Mountain,
    title: () => t('features.location.title'),
    description: () => t('features.location.description')
  },
  {
    icon: Utensils,
    title: () => t('features.restaurant.title'),
    description: () => t('features.restaurant.description')
  },
  {
    icon: Wifi,
    title: () => t('features.amenities.title'),
    description: () => t('features.amenities.description')
  },
  {
    icon: Coffee,
    title: () => t('features.atmosphere.title'),
    description: () => t('features.atmosphere.description')
  },
  {
    icon: Snowflake,
    title: () => t('features.winter.title'),
    description: () => t('features.winter.description')
  },
  {
    icon: Map,
    title: () => t('features.hiking.title'),
    description: () => t('features.hiking.description')
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gray-50 min-h-screen relative">
      <div 
        className="absolute top-0 left-0 size-full opacity-20"
        style={{
          backgroundImage: "url(assets/images/bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "120%",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('home.features.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('home.features.subtitle')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <feature.icon className="w-12 h-12 text-sky-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title()}</h3>
              <p className="text-gray-600">{feature.description()}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}