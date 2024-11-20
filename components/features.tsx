"use client";

import { motion } from "framer-motion";
import { Mountain, Utensils, Wifi, Coffee, Snowflake, Map } from "lucide-react";

const features = [
  {
    icon: Mountain,
    title: "Prime Location",
    description: "Situated at 2020m with breathtaking Alpine views"
  },
  {
    icon: Utensils,
    title: "Mountain Restaurant",
    description: "Traditional Alpine cuisine with local ingredients"
  },
  {
    icon: Wifi,
    title: "Modern Amenities",
    description: "High-speed WiFi and comfortable facilities"
  },
  {
    icon: Coffee,
    title: "Cozy Atmosphere",
    description: "Warm and welcoming mountain refuge experience"
  },
  {
    icon: Snowflake,
    title: "Winter Sports",
    description: "Direct access to ski slopes and winter activities"
  },
  {
    icon: Map,
    title: "Hiking Trails",
    description: "Connected to major Alpine hiking routes"
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gray-50 h-screen relative"
    >

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
          <h2 className="text-4xl font-bold mb-4">Why Choose Refuge de Loriaz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of mountain adventure and comfort at our refuge
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
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}