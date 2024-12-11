"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { t } from "@/lib/i18n";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t("footer.contact.title")}
            </h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {t("footer.contact.address")}
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+33450540769">{t("footer.contact.phone")}</a>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:contact@refuge-loriaz.com">
                  {t("footer.contact.email")}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t("footer.quickLinks.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-sky-400">
                  {t("footer.quickLinks.services")}
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="hover:text-sky-400">
                  {t("footer.quickLinks.prices")}
                </Link>
              </li>
              <li>
                <Link href="/acces" className="hover:text-sky-400">
                  {t("footer.quickLinks.access")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-400">
                  {t("footer.quickLinks.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t("footer.legal.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cgv" className="hover:text-sky-400">
                  {t("footer.legal.terms")}
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:text-sky-400">
                  {t("footer.legal.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-sky-400">
                  {t("footer.legal.mentions")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t("footer.social.title")}
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400"
                aria-label={t("footer.social.facebook")}
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400"
                aria-label={t("footer.social.instagram")}
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            {t("footer.copyright").replace(
              "{year}",
              new Date().getFullYear().toString(),
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
