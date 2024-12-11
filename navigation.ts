import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import i18nextConfig from "@/config/i18n/next-i18n.config";

export type LocalePrefix = "as-needed" | "always" | "never";
export const localePrefix: LocalePrefix =
  i18nextConfig.localePrefix as LocalePrefix;

export const { locales, defaultLocale } = i18nextConfig;

export const pathnames = {
  "/": "/",
  "/faq": "/faq",

  "/blog": "/blog",
  "/search": "/search",

  "/legal/terms": "/legal/terms",
  "/legal/cgv": "/legal/cgv",
  "/legal/privacy": "/legal/privacy",

  "/offers": {
    en: "/offers",
    fr: "/offres",
  },

  "/api/[...params]": "/api/[...params]",
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({
    locales,
    localePrefix,
    pathnames,
  });
