"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { fr } from "date-fns/locale";

export default function ReservationPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    guests: "2",
    roomType: "dortoir",
    mealPlan: "demi-pension",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Redirect to confirmation page
    window.location.href = "/reservation/confirmation";
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Réservez votre séjour
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">
                  Informations personnelles
                </h2>

                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Booking Details */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">
                  Détails du séjour
                </h2>

                <div className="space-y-2">
                  <Label>{"Date d'arrivée"}</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    locale={fr}
                    className="rounded-md border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">Nombre de personnes</Label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 p-2"
                    required
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "personne" : "personnes"}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="roomType">{"Type d'hébergement"}</Label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 p-2"
                    required
                  >
                    <option value="dortoir">Dortoir collectif</option>
                    <option value="chambre">Chambre privative</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mealPlan">Formule repas</Label>
                  <select
                    id="mealPlan"
                    name="mealPlan"
                    value={formData.mealPlan}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 p-2"
                    required
                  >
                    <option value="demi-pension">Demi-pension</option>
                    <option value="nuit">Nuit seule</option>
                  </select>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-sky-400 hover:bg-sky-500"
            >
              Réserver maintenant
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
