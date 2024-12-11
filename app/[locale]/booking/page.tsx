"use client";  

import { motion } from "framer-motion";  
import { useEffect, useRef } from "react";  
import { useSearchParams } from "next/navigation";  

const RESERVATION_CONFIG = {  
  BASE_URL: 'https://public.nuit-resa.com/reservations-702a5efa66ab1035b8bf68c7aaace334.html',  
  HOTEL_ID: 'b4hcmajfxr',  
  CSS_URL: 'https://public.nuit-resa.com/css/forms-clients-inc.css',  
  JS_URL: 'https://public.nuit-resa.com/js/forms-clients-inc.js',  
};  

export default function ReservationPage({params: {locale}}: any) {  
  const iframeRef = useRef<HTMLIFrameElement>(null);  
  const searchParams = useSearchParams();  

  useEffect(() => {  
    // Add external CSS  
    const link = document.createElement('link');  
    link.rel = 'stylesheet';  
    link.href = RESERVATION_CONFIG.CSS_URL;  
    document.head.appendChild(link);  

    // Add external JS  
    const script = document.createElement('script');  
    script.src = RESERVATION_CONFIG.JS_URL;  
    script.async = true;  
    document.body.appendChild(script);  

    // Create iframe URL  
    const url = encodeURIComponent(window.location.href);  
    const date = searchParams.get('date');  
    const guests = searchParams.get('guests');  

    let iframeUrl = new URL(RESERVATION_CONFIG.BASE_URL);  
    iframeUrl.searchParams.set('h', RESERVATION_CONFIG.HOTEL_ID);  
    iframeUrl.searchParams.set('l', (locale || "fr").toUpperCase());  
    iframeUrl.searchParams.set('sh', '1');  
    iframeUrl.searchParams.set('url', url);  

    // Add date parameters if date is provided  
    if (date) {  
      const dateObj = new Date(date);  
      if (!isNaN(dateObj.getTime())) {  
        iframeUrl.searchParams.set('jour', dateObj.getDate().toString());  
        iframeUrl.searchParams.set('mois', (dateObj.getMonth() + 1).toString());  
        iframeUrl.searchParams.set('annee', dateObj.getFullYear().toString());  

        // Calculate jour_nb (day of year)  
        const start = new Date(dateObj.getFullYear(), 0, 0);  
        const diff = dateObj.getTime() - start.getTime();  
        const oneDay = 1000 * 60 * 60 * 24;  
        const dayOfYear = Math.floor(diff / oneDay);  
        iframeUrl.searchParams.set('jour_nb', dayOfYear.toString());  
      }  
    }  

    // Add guests parameters  
    if (guests) {  
      iframeUrl.searchParams.set('nbn_min', guests);  
      iframeUrl.searchParams.set('nbn_max', guests);  
    }  

    // Add default parameters  
    iframeUrl.searchParams.set('hebergement', '527');  
    iframeUrl.searchParams.set('nbn_bs', '0');  
    iframeUrl.searchParams.set('nbn_ms', '0');  
    iframeUrl.searchParams.set('nbn_hs', '0');  
    iframeUrl.searchParams.set('nbn_ths', '0');  
    iframeUrl.searchParams.set('nbn_vacs', '0');  
    iframeUrl.searchParams.set('enfants_accept', '1');  

    // Update iframe src  
    if (iframeRef.current) {  
      iframeRef.current.src = iframeUrl.toString();  
      console.log('Iframe URL:', iframeUrl.toString()); // For debugging  
    }  

    return () => {  
      document.head.removeChild(link);  
      if (script.parentNode) {  
        document.body.removeChild(script);  
      }  
    };  
  }, [searchParams, locale]);  

  return (  
    <div className="min-h-screen bg-gray-50 pt-20">  
      <div className="container mx-auto px-4 py-8">  
        <motion.div  
          initial={{ opacity: 0, y: 20 }}  
          animate={{ opacity: 1, y: 0 }}  
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8"  
        >  
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">  
            Réservez votre séjour  
          </h1>  

          <iframe  
            ref={iframeRef}  
            id="nuit-resa_iframe-resa"  
            onLoad={() => window.scrollTo(0, 0)}  
            frameBorder="0"  
            width="100%"  
            height="1500"  
            title="Reservation Form"  
          />  
        </motion.div>  
      </div>  
    </div>  
  );  
}  