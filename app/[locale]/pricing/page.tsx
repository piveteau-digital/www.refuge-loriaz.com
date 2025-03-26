"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PricesPage() {
  const t = useTranslations("pricing");

  const renderPriceCard = (item: any, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white shadow-lg p-6 rounded-lg"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-xl">{item.type}</h3>
        <div className="text-right">
          <span className="font-bold text-sky-400 text-2xl">{item.price}</span>
          <p className="text-gray-600 text-sm">{item.details}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {item.includes.map((detail: string, idx: number) => (
          <li key={idx} className="flex items-center text-gray-700">
            <span className="bg-sky-400 mr-2 rounded-full w-2 h-2" />
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src={"/assets/images/heading-section.jpeg"}
          // src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          alt="Vue du Refuge de Loriaz"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-white text-center">
            <h1 className="mb-4 font-bold text-4xl md:text-5xl">
              {t("title")}
            </h1>
            <p className="mx-auto px-4 max-w-2xl text-lg md:text-xl">
              {t("message")}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 py-8 container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="mb-8 font-bold text-3xl md:text-4xl text-center">
            {t("title")}
          </h1>

          {/* Accommodation */}
          <section className="mb-12">
            <h2 className="mb-6 font-bold text-2xl">
              {t("sections.accommodation.title")}
            </h2>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
              {t
                .raw("sections.accommodation.items")
                .map((item: any, index: number) =>
                  renderPriceCard(item, index),
                )}
            </div>
          </section>

          {/* Meals */}
          {/* <section className="mb-12">
            <h2 className="mb-6 font-bold text-2xl">
              {t("sections.meals.title")}
            </h2>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
              {t
                .raw("sections.meals.items")
                .map((item: any, index: number) =>
                  renderPriceCard(item, index),
                )}
            </div>
          </section> */}

          {/* Activities */}
          {/* <section className="mb-12">
            <h2 className="mb-6 font-bold text-2xl">
              {t("sections.activities.title")}
            </h2>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
              {t
                .raw("sections.activities.items")
                .map((item: any, index: number) =>
                  renderPriceCard(item, index),
                )}
            </div>
          </section> */}

          {/* Extras */}
          <section className="mb-12">
            <h2 className="mb-6 font-bold text-2xl">
              {t("sections.extras.title")}
            </h2>
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
              {t
                .raw("sections.extras.items")
                .map((item: any, index: number) =>
                  renderPriceCard(item, index),
                )}
            </div>
          </section>

          {/* Important Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-sky-50 mb-8 p-6 rounded-lg"
          >
            <div className="flex items-start">
              <Info className="flex-shrink-0 mt-1 mr-4 w-6 h-6 text-sky-400" />
              <div>
                <h3 className="mb-2 font-bold text-xl">
                  {t("importantInfo.title")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {t
                    .raw("importantInfo.items")
                    .map((item: any, index: number) => (
                      <li key={index}>• {item}</li>
                    ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          {/* <div className="text-center">
            <Button asChild className="bg-sky-400 hover:bg-sky-500">
              <Link href="/reservation">{t("cta")}</Link>
            </Button>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
}
