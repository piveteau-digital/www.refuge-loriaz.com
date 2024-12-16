"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fr } from "date-fns/locale";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

interface QuickBookingProps {
  className?: string;
  small?: boolean;
}

export function QuickBooking({
  className = "",
  small = false,
}: QuickBookingProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [guests, setGuests] = useState(2);
  const tLanding = useTranslations("landing");

  return (
    <div className={className}>
      <section
        className={cn({
          "py-20 bg-white/80": !small,
          "py-8": small,
        })}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              {tLanding("quickBooking.title")}
            </h2>
            <div
              className={cn("grid grid-cols-1 gap-8", {
                "md:grid-cols-2": !small,
              })}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {tLanding("quickBooking.dates")}
                </label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  locale={fr}
                  className="rounded-md border"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {tLanding("quickBooking.guests")}
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num}{" "}
                        {num === 1
                          ? tLanding("quickBooking.guest")
                          : tLanding("quickBooking.guests")}
                      </option>
                    ))}
                  </select>
                </div>
                <Button className="w-full bg-sky-400 hover:bg-sky-700 text-white">
                  <Link
                  className="w-full h-full"
                    href={{
                      pathname: "/booking",
                      query: {
                        date: date?.toISOString()?.split("T")?.[0],
                        guests,
                      },
                    }}
                  >
                    {tLanding("quickBooking.check")}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
