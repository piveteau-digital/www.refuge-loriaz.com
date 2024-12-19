"use client";

import { useState, useEffect } from "react";
import { Link } from "@/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { useIsClient } from "@/hooks/useIsClient";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("common");
  const isClient = useIsClient();

  const navItems = [
    { name: t("navigation.home"), href: "/" },
    { name: t("navigation.services"), href: "/services" },
    { name: t("navigation.about"), href: "/about" },
    { name: t("navigation.access"), href: "/access" },
    { name: t("navigation.contact"), href: "/contact" },
    { name: t("navigation.prices"), href: "/pricing" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isClient) return null;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold w-[180px]">
            <Image
              src="/assets/images/logo.png"
              width={200}
              height={80}
              alt="Logo Refuge de Loriaz"
              className="w-auto h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href as "/"}
                className={`${
                  isScrolled ? "text-gray-900" : "text-white"
                } hover:opacity-75 transition-opacity`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className={`px-4 py-2 rounded-full ${
                isScrolled ? "bg-sky-400 text-white" : "bg-white text-gray-900"
              } hover:opacity-90 transition-all`}
            >
              {/* <Link href={"/reservation" as "/booking"}>{t("book")}</Link> */}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t("menu")}
          >
            {isOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href as any}
                  className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* <Link
                href={"/booking" as "/booking"}
                className="block px-3 py-2 text-white bg-sky-400 rounded-md text-center"
                onClick={() => setIsOpen(false)}
              >
                {t("book")}
              </Link> */}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
