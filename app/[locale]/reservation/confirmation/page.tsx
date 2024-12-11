"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from '@/config/@next-intl';

export default function ConfirmationPage() {
  const t = useTranslations('booking');

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          
          <h1 className="text-3xl font-bold mb-4">
            {t('confirmation.title')}
          </h1>
          
          <p className="text-gray-600 mb-8">
            {t('confirmation.message')}
          </p>

          <div className="space-y-4">
            <Button asChild className="w-full bg-sky-400 hover:bg-sky-500">
              <Link href="/">
                {t('buttons.home')}
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="w-full"
            >
              <Link href="/contact">
                {t('buttons.contact')}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}