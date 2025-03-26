"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface QuickBookingProps {
  className?: string;
  small?: boolean;
}

export function QuickBooking({
  className = "",
  small = false,
}: QuickBookingProps) {
  const tLanding = useTranslations("landing");
  const tContact = useTranslations("contact");
  const contactInfo = tContact.raw("contactInfo");

  return (
    <div className={className}>
      <section
        className={cn({
          "py-20 bg-white/80": !small,
          "py-8": small,
        })}
      >
        <div className="mx-auto px-4 container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg mx-auto p-8 rounded-xl max-w-2xl"
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
