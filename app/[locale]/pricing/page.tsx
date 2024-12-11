"use client";  

import { motion } from "framer-motion";  
import { Info } from "lucide-react";  
import Link from "next/link";  
import { Button } from "@/components/ui/button";  
import { useTranslations } from 'next-intl';  

export default function PricesPage() {  
  const t = useTranslations('pricing');  

  const renderPriceCard = (item: any, index: number) => (  
    <motion.div  
      key={index}  
      initial={{ opacity: 0, y: 20 }}  
      whileInView={{ opacity: 1, y: 0 }}  
      viewport={{ once: true }}  
      transition={{ delay: index * 0.1 }}  
      className="bg-white rounded-lg shadow-lg p-6"  
    >  
      <div className="flex justify-between items-start mb-4">  
        <h3 className="text-xl font-semibold">{item.type}</h3>  
        <div className="text-right">  
          <span className="text-2xl font-bold text-sky-400">{item.price}</span>  
          <p className="text-sm text-gray-600">{item.details}</p>  
        </div>  
      </div>  
      <ul className="space-y-2">  
        {item.includes.map((detail: string, idx: number) => (  
          <li key={idx} className="flex items-center text-gray-700">  
            <span className="w-2 h-2 bg-sky-400 rounded-full mr-2" />  
            {detail}  
          </li>  
        ))}  
      </ul>  
    </motion.div>  
  );  

  return (  
    <div className="min-h-screen bg-gray-50 pt-20">  
      <div className="container mx-auto px-4 py-8">  
        <motion.div  
          initial={{ opacity: 0, y: 20 }}  
          animate={{ opacity: 1, y: 0 }}  
          className="max-w-4xl mx-auto"  
        >  
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">  
            {t('title')}  
          </h1>  

          {/* Accommodation */}  
          <section className="mb-12">  
            <h2 className="text-2xl font-bold mb-6">{t('sections.accommodation.title')}</h2>  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
              {t.raw('sections.accommodation.items').map((item: any, index: number) => renderPriceCard(item, index))}  
            </div>  
          </section>  

          {/* Meals */}  
          <section className="mb-12">  
            <h2 className="text-2xl font-bold mb-6">{t('sections.meals.title')}</h2>  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">  
              {t.raw('sections.meals.items').map((item: any, index: number) => renderPriceCard(item, index))}  
            </div>  
          </section>  

          {/* Activities */}  
          <section className="mb-12">  
            <h2 className="text-2xl font-bold mb-6">{t('sections.activities.title')}</h2>  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
              {t.raw('sections.activities.items').map((item: any, index: number) => renderPriceCard(item, index))}  
            </div>  
          </section>  

          {/* Important Information */}  
          <motion.div  
            initial={{ opacity: 0, y: 20 }}  
            whileInView={{ opacity: 1, y: 0 }}  
            viewport={{ once: true }}  
            className="bg-sky-50 rounded-lg p-6 mb-8"  
          >  
            <div className="flex items-start">  
              <Info className="w-6 h-6 text-sky-400 mr-4 flex-shrink-0 mt-1" />  
              <div>  
                <h3 className="text-xl font-bold mb-2">{t('importantInfo.title')}</h3>  
                <ul className="space-y-2 text-gray-700">  
                  {t.raw('importantInfo.items').map((item: any, index: number) => (  
                    <li key={index}>• {item}</li>  
                  ))}  
                </ul>  
              </div>  
            </div>  
          </motion.div>  

          {/* CTA */}  
          <div className="text-center">  
            <Button asChild className="bg-sky-400 hover:bg-sky-500">  
              <Link href="/reservation">{t('cta')}</Link>  
            </Button>  
          </div>  
        </motion.div>  
      </div>  
    </div>  
  );  
}  