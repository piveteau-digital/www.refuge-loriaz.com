"use client";

import { motion } from "framer-motion";
import { Mountain, Flag, ArrowRight } from "lucide-react";
import { useTranslations } from "@/config/@next-intl";

export function Features() {
  const t = useTranslations("landing");

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty?.toLowerCase()) {
      case "difficult":
        return "text-red-500";
      case "moderate":
        return "text-orange-500";
      default:
        return "text-green-500";
    }
  };

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
          <h2 className="text-4xl font-bold mb-4">{t("hikes.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("hikes.subtitle")}
          </p>
        </motion.div>

        {/* Day Hikes Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">{t("hikes.dayHikes.title")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.raw("hikes.dayHikes.items").map((hike: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <Mountain className="w-12 h-12 text-sky-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">{hike.title}</h4>
                <p className="text-gray-600 mb-4">{hike.description}</p>
                <span className={`text-sm font-medium ${getDifficultyColor(hike.difficulty)}`}>
                  {hike.difficultyLabel}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Multi-day Hikes Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8">{t("hikes.multiDayHikes.title")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.raw("hikes.multiDayHikes.items").map((tour: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md flex items-center"
              >
                <Flag className="w-8 h-8 text-sky-400 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">{tour.title}</h4>
                  <p className="text-gray-600">{tour.description}</p>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 ml-auto flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}