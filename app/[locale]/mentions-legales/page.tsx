"use client";

import { motion } from "framer-motion";
import { t } from "@/lib/i18n";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold mb-6">{t('legal.mentions.title')}</h1>
          
          <div className="prose prose-sky max-w-none">
            <h2 className="text-xl font-semibold mt-8 mb-4">{t('legal.mentions.editor.title')}</h2>
            <p className="mb-4">{t('legal.mentions.editor.content')}</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">{t('legal.mentions.hosting.title')}</h2>
            <p className="mb-4">{t('legal.mentions.hosting.content')}</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">{t('legal.mentions.credits.title')}</h2>
            <p className="mb-4">{t('legal.mentions.credits.content')}</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">{t('legal.mentions.intellectual.title')}</h2>
            <p className="mb-4">{t('legal.mentions.intellectual.content')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}