"use client";

import { motion } from "framer-motion";
import { Cloud, Sun, Thermometer, Wind } from "lucide-react";
import { t } from "@/lib/i18n";

const iconClassName = "mx-auto mb-4 w-12 h-12";

const WeatherItem = ({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) => {
  return (
    <div className="flex justify-start items-center text-center">
      <div className="w-12 h-12">
        {icon}
      </div>
      <div className="flex flex-col pl-4 h-12 text-left">
        <h3 className="mb-2 font-semibold text-xs">{title}</h3>
        <p className="font-bold text-sm">{value}</p>
      </div>
    </div>
  );
};

export function Weather() {
  return (
    <section className="bg-gray-900 py-16 text-white">
      <div className="mx-auto px-4 container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="mb-12 font-bold text-3xl text-center">
            {t("weather.title")}
          </h2>
          <div className="flex flex-wrap justify-between gap-4">
            <WeatherItem
              title={t("weather.temperature.title")}
              value={t("weather.temperature.value")}
              icon={<Thermometer className={iconClassName} />}
            />
            <WeatherItem
              title={t("weather.wind.title")}
              value={t("weather.wind.value")}
              icon={<Wind className={iconClassName} />}
            />
            <WeatherItem
              title={t("weather.conditions.title")}
              value={t("weather.conditions.value")}
              icon={<Cloud className={iconClassName} />}
            />
          </div>
          <div className="flex justify-center items-center mt-8 w-full">
            <iframe
              className="w-full min-h-[360px]"
              loading="lazy"
              src="https://www.skylinewebcams.com/webcam/france/auvergne-rhone-alpes/vallorcine/vallorcine-mont-blanc.html?w=5366"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
