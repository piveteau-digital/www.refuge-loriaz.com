"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useIsClient } from "@/hooks/useIsClient";
import { Loader } from "@/components/ui/loader";

const RESERVATION_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_ACCOMMODATION_FORM_URL ?? "",
    // "https://public.nuit-resa.com/reservations-702a5efa66ab1035b8bf68c7aaace334.html",
};

export default function ReservationPage({ params: { locale } }: any) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const searchParams = useSearchParams();
  const t = useTranslations("booking");
  const [loading, setLoading] = useState(true);
  const isClient = useIsClient();


  console.log("isClient", isClient)

  useEffect(() => {
    if (!isClient) return;
    // Add external CSS
    const link = document.createElement("link");

    document.head.appendChild(link);

    // Create iframe URL
    const url = encodeURIComponent(window.location.href);
    const date = searchParams.get("date");
    const guests = searchParams.get("guests");

    let iframeUrl = new URL(RESERVATION_CONFIG.BASE_URL);

    // Update iframe src
    if (iframeRef.current) {
      iframeRef.current.src = iframeUrl.toString();
      console.log("Iframe URL:", iframeUrl.toString()); // For debugging
    }

    setLoading(false);

    return () => {
      document.head.removeChild(link);
    };
  }, [searchParams, locale, isClient]);

  if (!isClient) return (
    <div className="flex justify-center items-center h-screen">
      <Loader className="size-32" />
    </div>
  ) 
  
  if (isClient) {
    console.log(window)
  }


  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative pt-20 h-[30vh] overflow-hidden">
        <Image
          src={"/assets/images/heading-section.jpeg"}
          // src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          alt="Vue du Refuge de Loriaz"
          fill
          className="h-screen object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-white text-center">
            <h1 className="font-bold text-2xl md:text-5xl">{t("title")}</h1>
            <p className="mx-auto px-4 max-w-2xl text-md md:text-xl">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
      <div className="relative mx-auto px-2 py-8 container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -100 }}
          className="bg-white shadow-lg mx-auto p-6 md:p-8 rounded-xl max-w-2xl h-full overflow-y-scroll"
        >

          <div className="flex flex-col justify-center items-center w-full">  
            <p className="bg-blue-100 px-4 py-2 rounded-md w-full text-blue-800 text-sm">
              Petite phrase + de 10 personnes
            </p>
          </div>

          <iframe
            className="flex flex-col justify-center items-center w-full"
            ref={iframeRef}
            id="nuit-resa_iframe-resa"
            width="100%"
            height={880}
            title="Reservation Form"
          />
        </motion.div>
      </div>
      {loading && (
        <div className="z-50 absolute inset-0 flex justify-center items-center bg-black/30">
          <Loader className="size-32" />
        </div>
      )}



    </div>
  );
}
