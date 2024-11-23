"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect } from 'react';
import Script from 'next/script';

interface QuickBookingProps {
  className?: string;
  small?:boolean;
}


const Reservation = () => {
  
};

export default Reservation;

export function QuickBooking({ className = "", small = false}: QuickBookingProps) {
  useEffect(() => {
    // Create and append iframe after component mounts
    const url = encodeURIComponent(window.parent.document.URL);
    const iframe = document.createElement('iframe');
    
    iframe.id = 'nuit-resa_iframe-resa';
    iframe.src = `https://public.nuit-resa.com/reservations-75969b35e34701dccd555a3557f615e2.html?h=&l=FR&sh=1&url=${url}`;
    iframe.frameBorder = '0';
    iframe.width = '100%';
    iframe.height = '1500';
    
    iframe.onload = () => window.parent.parent.scrollTo(0, 0);
    
    const container = document.getElementById('reservation-container');
    if (container) {
      container.appendChild(iframe);
    }
  }, []);

  return (
    <>
      <Script 
        src="https://public.nuit-resa.com/js/forms-clients-inc.js"
        strategy="afterInteractive"
      />
      <link 
        rel="stylesheet" 
        href="https://public.nuit-resa.com/css/forms-clients-inc.css" 
        type="text/css" 
      />

<div className={className} >
      <section className={cn(
        {
          "py-20 bg-white/80": !small,
          "py-8": small
        }
      )}>
        <div className="container mx-auto px-4 max-h-[75dvh] overflow-y-scroll bg-white rounded-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto  shadow-lg p-8"
          >
            <div className={cn("grid grid-cols-1 gap-8",{
              "md:grid-cols-2": !small
            })}>



      <div id="reservation-container" />
              </div>
              </motion.div>
              </div>
              </section>
              </div>
    </>
  );
}