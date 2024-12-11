import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import i18nextConfig from "@/config/i18n/next-i18n.config";

export type LocalePrefix = "as-needed" | "always" | "never";
export const localePrefix: LocalePrefix =
  i18nextConfig.localePrefix as LocalePrefix;

export const { locales, defaultLocale } = i18nextConfig;

export const pathnames = {
  "/": "/",

  "/about": {
    fr: "/a-propos",
    en: "/about",
  },

  "/services": {
    en: "/services",
    fr: "/services",
  },

  "/access": {
    en: "/access",
    fr: "/acces",
  },
  "/contact": {
    en: "/contact",
    fr: "/contact",
  },
  "/pricing": {
    en: "/pricing",
    fr: "/tarifs",
  },
  "/booking": {
    en: "/booking",
    fr: "/reservation",
  },



  "/blog": "/blog",

  "/legal/terms": "/legal/terms",
  "/legal/cgv": "/legal/cgv",
  "/legal/privacy": "/legal/privacy",


  "/api/[...params]": "/api/[...params]",
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({
    locales,
    localePrefix,
    pathnames,
  });
