"use client";

import { motion } from "framer-motion";
import { Cloud, Sun, Thermometer, Wind } from "lucide-react";
import { t } from "@/lib/i18n";

export function Weather() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("weather.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Thermometer className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t("weather.temperature.title")}
              </h3>
              <p className="text-4xl font-bold">
                {t("weather.temperature.value")}
              </p>
            </div>
            <div className="text-center">
              <Cloud className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t("weather.conditions.title")}
              </h3>
              <p className="text-4xl font-bold">
                {t("weather.conditions.value")}
              </p>
            </div>
            <div className="text-center">
              <Wind className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t("weather.wind.title")}
              </h3>
              <p className="text-4xl font-bold">{t("weather.wind.value")}</p>
            </div>
            <div className="text-center">
              <Sun className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t("weather.uv.title")}
              </h3>
              <p className="text-4xl font-bold">{t("weather.uv.value")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
