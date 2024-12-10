"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          
          <h1 className="text-3xl font-bold mb-4">
            Réservation confirmée !
          </h1>
          
          <p className="text-gray-600 mb-8">
            Merci pour votre réservation au Refuge de Loriaz. Vous recevrez bientôt un email de confirmation avec tous les détails de votre séjour.
          </p>

          <div className="space-y-4">
            <Button asChild className="w-full bg-sky-400 hover:bg-sky-500">
              <Link href="/">
                Retour à l'accueil
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="w-full"
            >
              <Link href="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}