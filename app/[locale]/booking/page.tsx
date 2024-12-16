"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

const RESERVATION_CONFIG = {
  BASE_URL:
    "https://public.nuit-resa.com/reservations-702a5efa66ab1035b8bf68c7aaace334.html",
  HOTEL_ID: "b4hcmajfxr",
  CSS_URL: "https://public.nuit-resa.com/css/forms-clients-inc.css",
  JS_URL: "https://public.nuit-resa.com/js/forms-clients-inc.js",
};

export default function ReservationPage({ params: { locale } }: any) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const searchParams = useSearchParams();
  const t = useTranslations("booking");

  useEffect(() => {
    // Add external CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = RESERVATION_CONFIG.CSS_URL;
    document.head.appendChild(link);

    // Add external JS
    const script = document.createElement("script");
    script.src = RESERVATION_CONFIG.JS_URL;
    script.async = true;
    document.body.appendChild(script);

    // Create iframe URL
    const url = encodeURIComponent(window.location.href);
    const date = searchParams.get("date");
    const guests = searchParams.get("guests");

    let iframeUrl = new URL(RESERVATION_CONFIG.BASE_URL);
    iframeUrl.searchParams.set("h", RESERVATION_CONFIG.HOTEL_ID);
    iframeUrl.searchParams.set("l", (locale || "fr").toUpperCase());
    iframeUrl.searchParams.set("sh", "1");
    iframeUrl.searchParams.set("url", url);

    // Add date parameters if date is provided
    if (date) {
      const dateObj = new Date(date);
      if (!isNaN(dateObj.getTime())) {
        iframeUrl.searchParams.set("jour", dateObj.getDate().toString());
        iframeUrl.searchParams.set("mois", (dateObj.getMonth() + 1).toString());
        iframeUrl.searchParams.set("annee", dateObj.getFullYear().toString());

        // Calculate jour_nb (day of year)
        const start = new Date(dateObj.getFullYear(), 0, 0);
        const diff = dateObj.getTime() - start.getTime();
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);
        iframeUrl.searchParams.set("jour_nb", dayOfYear.toString());
      }
    }

    // Add guests parameters
    if (guests) {
      iframeUrl.searchParams.set("nbn_min", guests);
      iframeUrl.searchParams.set("nbn_max", guests);
    }

    // Add default parameters
    iframeUrl.searchParams.set("hebergement", "527");
    iframeUrl.searchParams.set("nbn_bs", "0");
    iframeUrl.searchParams.set("nbn_ms", "0");
    iframeUrl.searchParams.set("nbn_hs", "0");
    iframeUrl.searchParams.set("nbn_ths", "0");
    iframeUrl.searchParams.set("nbn_vacs", "0");
    iframeUrl.searchParams.set("enfants_accept", "1");

    // Update iframe src
    if (iframeRef.current) {
      iframeRef.current.src = iframeUrl.toString();
      console.log("Iframe URL:", iframeUrl.toString()); // For debugging
    }

    return () => {
      document.head.removeChild(link);
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, [searchParams, locale]);

  const handleIframeParams = () => {
    console.log("Iframe loaded");
    window.scrollTo(0, 0);

    const date = searchParams.get("date");
    if (!date) return;

    // Get iframe document
    const iframe = iframeRef.current;
    if (!iframe) return;

    try {
      const iframeDocument =
        iframe.contentDocument || iframe.contentWindow?.document;
      if (!iframeDocument) return;

      // Try to find and set the date input
      const arrivalDateInput = iframeDocument.querySelector(
        "#date_arrivee",
      ) as HTMLInputElement;
      if (arrivalDateInput) {
        // Format date to match input requirements (assuming YYYY-MM-DD format)
        const formattedDate = new Date(date).toISOString().split("T")[0];
        arrivalDateInput.value = formattedDate;

        // Trigger change event to ensure any listeners in the iframe are notified
        const event = new Event("change", { bubbles: true });
        arrivalDateInput.dispatchEvent(event);
      }
    } catch (error) {
      // Handle cross-origin errors
      console.warn("Unable to access iframe content:", error);

      // Alternative: Use postMessage if the iframe is cross-origin
      iframe.contentWindow?.postMessage(
        {
          type: "SET_ARRIVAL_DATE",
          date: date,
        },
        "*",
      ); // Replace '*' with the specific origin for better security
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="relative h-[30vh] overflow-hidden pt-20">
        <Image
          src={"/assets/images/heading-section.jpeg"}
          // src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          alt="Vue du Refuge de Loriaz"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">{t("title")}</h1>
            {/* <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              {t("message")}
            </p> */}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8"
        >
          <iframe
            ref={iframeRef}
            id="nuit-resa_iframe-resa"
            onLoad={() => handleIframeParams()}
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
