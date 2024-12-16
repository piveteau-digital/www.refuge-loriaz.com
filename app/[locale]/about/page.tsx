"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Mountain, Users } from "lucide-react";
import { useTranslations } from "next-intl";

const icons = [
  <Mountain key={`attributes.icon-0`} className="w-12 h-12 mx-auto mb-4 text-sky-400" />,
  <Heart key={`attributes.icon-1`} className="w-12 h-12 mx-auto mb-4 text-sky-400" />,
  <Users key={`attributes.icon-2`} className="w-12 h-12 mx-auto mb-4 text-sky-400" />,
]

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          alt="Vue du Refuge de Loriaz"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              {t("message")}
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.raw("attributes").map((attribute: any, idx: number) => (
              <motion.div
                key={`about-attributes-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
                transition={{ delay: idx * 0.3 }}
              >
                {icons[idx]}
                {/* <attribute.icon className="w-12 h-12 mx-auto mb-4 text-sky-400" /> */}
                <h3 className="text-xl font-bold mb-2">{attribute.title}</h3>
                <p className="text-gray-600">{attribute.message}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("timeline.title")}
          </h2>
          <div className="max-w-3xl mx-auto">
            {t.raw("timeline.items").map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center mb-8"
              >
                <div className="w-24 text-right pr-4">
                  <span className="text-sky-400 font-bold">{item.year}</span>
                </div>
                <div className="w-4 h-4 bg-sky-400 rounded-full relative">
                  <div className="absolute w-px h-full bg-sky-400 left-1/2 transform -translate-x-1/2" />
                </div>
                <div className="flex-1 pl-4">
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("team.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.raw("team.items").map((member: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-sky-400 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
