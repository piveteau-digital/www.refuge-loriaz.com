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

  return (
    <div className={className}>
      <section
        className={cn({
          "py-20 bg-white/80": !small,
          "py-8": small,
        })}
      >
        {/* <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              {tLanding("quickBooking.title")}
            </h2>
            <div className="flex justify-center">
              <iframe
                src="https://public.nuit-resa.com/calendrier-543-702a5efa66ab1035b8bf68c7aaace334.html?l=FR&redirection=1&masquer_legende=1&"
                width="400"
                height="380"
                className="border-0"
                title="Booking Calendar"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div> */}
      </section>
    </div>
  );
}
