"use client";

import { motion } from "framer-motion";
import { t } from "@/lib/i18n";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold mb-6">{t('legal.privacy.title')}</h1>
          
          <div className="prose prose-sky max-w-none">
            <h2 className="text-xl font-semibold mt-8 mb-4">{t('legal.privacy.collection.title')}</h2>
            <p className="mb-4">{t('legal.privacy.collection.content')}</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">{t('legal.privacy.usage.title')}</h2>
            <p className="mb-4">{t('legal.privacy.usage.content')}</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">{t('legal.privacy.cookies.title')}</h2>
            <p className="mb-4">{t('legal.privacy.cookies.content')}</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">{t('legal.privacy.rights.title')}</h2>
            <p className="mb-4">{t('legal.privacy.rights.content')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}