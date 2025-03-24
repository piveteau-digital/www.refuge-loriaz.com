"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useIsClient } from "@/hooks/useIsClient";
import { Loader } from "@/components/ui/loader";
import { Phone } from "lucide-react";

const RESERVATION_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_ACCOMMODATION_FORM_URL ?? "",
    // "https://public.nuit-resa.com/reservations-702a5efa66ab1035b8bf68c7aaace334.html",
};

export default function ReservationPage({ params: { locale } }: any) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const searchParams = useSearchParams();
  const t = useTranslations("booking");
  const tContact = useTranslations("contact");
  const [loading, setLoading] = useState(true);
  const isClient = useIsClient();


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

  const contactInfo = tContact.raw("contactInfo");

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
          <div className="max-md:mt-8 text-white text-center">
            <h1 className="font-bold text-xl md:text-5xl">{t("title")}</h1>
            <p className="mx-auto px-4 max-w-2xl text-md md:text-xl">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
      <div className="relative mx-auto px-2 py-8 container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: -60 }}
          className="bg-white shadow-lg mx-auto p-6 md:p-8 !pt-2 rounded-xl max-w-2xl h-full overflow-y-scroll"
        >
          <div className="bg-sky-50 mx-auto my-4 mb-6 p-4 border-sky-400 border-r-4 border-l-4 rounded-md max-w-5xl">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-sky-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sky-700 text-sm">
                  {tContact("specialBookingNotice")} <br />
                  <a
                    target="_blank"
                    href={`tel:${contactInfo.phone.value}`}
                    className="font-medium hover:text-sky-600 underline"
                  >
                    {contactInfo.phone.value}
                  </a>
                </p>
              </div>
            </div>
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
