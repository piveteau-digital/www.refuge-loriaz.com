"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "@/config/@next-intl";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [sent, setSent] = useState<boolean | null>(null);
  const [submitting, setSubmitting] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent | any) => {
    e.preventDefault();
    setSubmitting(true);
    if (sent) return;
    
    const formData = {
      firstName: e.currentTarget.firstName.value,
      lastName: e.currentTarget.lastName.value,
      email: e.currentTarget.email.value,
      subject: e.currentTarget.subject.value,
      message: e.currentTarget.message.value,
    };

    console.log(formData)
    try {
      const response = await fetch('/api/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage(t("form.success"));
        setSent(true)
      } else {
        setSent(false)
        setStatusMessage(t("form.error"));
      }
    } catch (error) {
      console.error('Error:', error);
      setSent(false)
      setStatusMessage(t("form.error"));
    }
  };

  const contactInfo = t.raw("contactInfo"),
    form = t.raw("form");

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src={"/assets/images/heading-section.jpeg"}
          // src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
          alt="Vue du Refuge de Loriaz"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-center text-white">
            <h1 className="mb-4 font-bold text-4xl md:text-5xl">
              {t("title")}
            </h1>
            <p className="mx-auto px-4 max-w-2xl text-lg md:text-xl">
              {t("message")}
            </p>
          </div>
        </div>
      </div>

      <div className="border-sky-400 bg-sky-50 mx-auto mt-8 p-4 border-l-4 max-w-5xl">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-sky-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sky-700 text-sm">
              {t("bookingNotice")}{' '}
              <a 
                href={`tel:${contactInfo.phone.value}`} 
                className="font-medium hover:text-sky-600 underline"
              >
                {contactInfo.phone.value}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 py-8 container">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="gap-8 grid grid-cols-1 md:grid-cols-2"
          >
            {/* Contact Information */}
            <div className="bg-white shadow-lg p-6 md:p-8 rounded-xl">
              <h2 className="mb-6 font-bold text-2xl">{t("title")}</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="flex-shrink-0 mr-4 w-6 h-6 text-sky-400" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      {contactInfo.phone.label}
                    </h3>
                    <p className="text-gray-600">{contactInfo.phone.value}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="flex-shrink-0 mr-4 w-6 h-6 text-sky-400" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      {contactInfo.email.label}
                    </h3>
                    <p className="text-gray-600">{contactInfo.email.value}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="flex-shrink-0 mr-4 w-6 h-6 text-sky-400" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      {contactInfo.address.label}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {contactInfo.address.value}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="flex-shrink-0 mr-4 w-6 h-6 text-sky-400" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      {contactInfo.hours.label}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {contactInfo.hours.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-lg p-6 md:p-8 rounded-xl">
              <h2 className="mb-6 font-bold text-2xl">{t("message")}</h2>

              {statusMessage && (
                <div className={cn("mt-4 p-4 rounded", {
                  "bg-green-100 text-green-800": sent,
                  "bg-red-100 text-red-800": !sent
                })}>
                  {statusMessage}
                </div>
              )}


              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{form.firstName}</Label>
                    <Input name="firstName" id="firstName" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">{form.lastName}</Label>
                    <Input name="lastName" id="lastName" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{form.email}</Label>
                  <Input name="email" id="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{form.subject}</Label>
                  <Input name="subject" id="subject" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{form.message}</Label>
                  <Textarea name="message" id="message" className="min-h-[150px]" required />
                </div>

                <Button
                  disabled={!!sent || !!submitting}
                  type="submit"
                  className="bg-sky-400 hover:bg-sky-500 w-full"
                >
                  {form.submit}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
