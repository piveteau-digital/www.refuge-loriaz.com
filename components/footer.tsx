"use client";

"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  Map,
  MapPin,
  Phone,
  Globe,
} from "lucide-react";
import { t } from "@/lib/i18n";
import appInfos from "@/package.json";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const languages = [
    { code: "fr", label: "Français" },
    { code: "en", label: "English" },
  ];

  const getCurrentLocale = () => {
    const pathParts = pathname.split("/");
    return pathParts[1] === "fr" || pathParts[1] === "en" ? pathParts[1] : "fr";
  };

  const handleLanguageChange = (locale: string) => {
    const currentLocale = getCurrentLocale();
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
  };
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
                <a href="tel:+33 06 52 53 69 73">{t("footer.contact.phone")}</a>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:refuge.loriaz@orange.fr">
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
                href="https://www.facebook.com/p/Refuge-de-Loriaz-100040055443458/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400"
                aria-label={t("footer.social.facebook")}
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/refugedeloriaz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400"
                aria-label={t("footer.social.instagram")}
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.google.com/maps/place/Refuge+de+Loriaz/@45.9806506,6.7566699,25733m/data=!3m1!1e3!4m13!1m2!2m1!1srefuge+de+loriaz!3m9!1s0x478eb3a36e8bac03:0xde979b0952a3522b!5m2!4m1!1i2!8m2!3d46.0389234!4d6.9129579!15sChByZWZ1Z2UgZGUgbG9yaWF6kgEMbW91bnRhaW5faHV04AEA!16s%2Fg%2F11g1tf6cg1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400"
                aria-label={t("footer.social.instagram")}
              >
                <Map className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Globe className="w-5 h-5 mr-2" />
            {getCurrentLocale() === "fr" ? "Langue" : "Language"}
          </h3>
          <div className="flex space-x-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`flex w-min items-center px-3  rounded-md transition-colors ${
                  getCurrentLocale() === lang.code
                    ? "underline"
                    : "hover:bg-gray-800"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            <small className="mr-2">{`v${appInfos.version}`}</small>
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
