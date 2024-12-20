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

  const handleSubmit = async (e: React.FormEvent | any) => {
    e.preventDefault();
    
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
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[50vh] overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              {t("message")}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">{t("title")}</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-sky-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {contactInfo.phone.label}
                    </h3>
                    <p className="text-gray-600">{contactInfo.phone.value}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-sky-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {contactInfo.email.label}
                    </h3>
                    <p className="text-gray-600">{contactInfo.email.value}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-sky-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {contactInfo.address.label}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {contactInfo.address.value}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-sky-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">
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
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">{t("message")}</h2>

              {statusMessage && (
                <div className={cn("mt-4 p-4 rounded", {
                  "bg-green-100 text-green-800": sent,
                  "bg-red-100 text-red-800": !sent
                })}>
                  {statusMessage}
                </div>
              )}


              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  type="submit"
                  className="w-full bg-sky-400 hover:bg-sky-500"
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
