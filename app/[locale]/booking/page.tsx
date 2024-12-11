"use client";  

import { motion } from "framer-motion";  
import { useEffect, useRef } from "react";  
import { useSearchParams } from "next/navigation";  
// import { RESERVATION_CONFIG } from "@/config/reservation";  

// config/reservation.ts  
export const RESERVATION_CONFIG = {  
  BASE_URL: 'https://public.nuit-resa.com/reservations-702a5efa66ab1035b8bf68c7aaace334.html',  
  HOTEL_ID: 'b4hcmajfxr',  
  CSS_URL: 'https://public.nuit-resa.com/css/forms-clients-inc.css',  
  JS_URL: 'https://public.nuit-resa.com/js/forms-clients-inc.js',  
};  

export default function ReservationPage({params: {locale}}: any) {  
  const iframeRef = useRef<HTMLIFrameElement>(null);  
  const searchParams = useSearchParams();  

  useEffect(() => {  
    const date = searchParams.get('date') || '';  
    const guests = searchParams.get('guests') || '';  

    const iframeUrl = new URL(RESERVATION_CONFIG.BASE_URL);  
    iframeUrl.searchParams.set('h', RESERVATION_CONFIG.HOTEL_ID);  
    iframeUrl.searchParams.set('l', (locale || "fr").toUpperCase());  
    iframeUrl.searchParams.set('sh', '1');  
    iframeUrl.searchParams.set('url', encodeURIComponent(window.location.href));  
    if (date) iframeUrl.searchParams.set('date_arrivee', date);
    if (guests) iframeUrl.searchParams.set('guests', guests);

    if (iframeRef.current) {  
      iframeRef.current.src = iframeUrl.toString();  
    }  

    // Add external resources  
    const link = document.createElement('link');  
    link.rel = 'stylesheet';  
    link.href = RESERVATION_CONFIG.CSS_URL;  
    document.head.appendChild(link);  

    const script = document.createElement('script');  
    script.src = RESERVATION_CONFIG.JS_URL;  
    script.async = true;  
    document.body.appendChild(script);  

    return () => {  
      document.head.removeChild(link);  
      document.body.removeChild(script);  
    };  
  }, [searchParams]);  

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