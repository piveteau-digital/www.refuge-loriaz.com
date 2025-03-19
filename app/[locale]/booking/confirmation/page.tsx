"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/config/@next-intl";
import { useSearchParams } from "next/navigation";

export default function ConfirmationPage() {
  const t = useTranslations("booking");
  const searchParams = useSearchParams();

  console.log("-))))))", searchParams.get("startDate"));
  console.log("-))))))--->>>>>>>", new Date(searchParams.get("startDate") || ""));

  return (
    <div className="bg-gray-50 pt-20 min-h-screen">
      <div className="mx-auto px-4 py-16 container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white shadow-lg mx-auto p-8 rounded-xl max-w-2xl text-center"
        >
          <CheckCircle className="mx-auto mb-6 w-16 h-16 text-green-500" />

          <h1 className="mb-4 font-bold text-3xl">{t("confirmation.title")}</h1>

          <p className="mb-8 text-gray-600">{t("confirmation.message")}</p>

          <div className="bg-sky-50 mb-8 p-6 border border-sky-200 rounded-lg">
            <h2 className="mb-4 font-semibold text-xl">Booking Details</h2>
            <div className="space-y-2 text-left">
              <p><span className="font-medium">Booking ID:</span> {searchParams.get('bookingId')}</p>
              <p><span className="font-medium">Accommodation:</span> {searchParams.get('accomodationName')}</p>
              <p><span className="font-medium">Check-in:</span> {new Date(searchParams.get('startDate') || '').toLocaleDateString()}</p>
              <p><span className="font-medium">Check-out:</span> {new Date(searchParams.get('endDate') || '').toLocaleDateString()}</p>
              <p><span className="font-medium">Total Price:</span> €{(Number(searchParams.get('price')) / 100).toFixed(2)}</p>
              <p><span className="font-medium">Guest Name:</span> {searchParams.get('customerName')}</p>
              <p><span className="font-medium">Email:</span> {searchParams.get('customerEmail')}</p>
            </div>
          </div>

          <div className="bg-green-50 mb-8 p-4 border border-green-200 rounded-lg">
            <p className="text-green-700">
              A confirmation email has been sent to your email address with all the booking details.
            </p>
          </div>

          <div className="space-y-4">
            <Button asChild className="bg-sky-400 hover:bg-sky-500 w-full">
              <Link href="/">{t("buttons.home")}</Link>
            </Button>

            <Button asChild variant="outline" className="w-full">
              <Link href="/contact">{t("buttons.contact")}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
