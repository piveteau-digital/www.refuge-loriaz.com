import { fr } from "./locales/fr";
import { en } from "./locales/en";

type Locale = "fr" | "en";
type Messages = typeof fr;

const messages = {
  fr,
  en,
};

let currentLocale: Locale = "fr";

export function setLocale(locale: Locale) {
  currentLocale = locale;
}

export function getLocaleFromUrl(url: string): Locale | null {
  const urlParams = new URLSearchParams(new URL(url).search);
  const locale = urlParams.get("locale");
  return locale === "fr" || locale === "en" ? locale : null;
}

export function t(key: keyof Messages | string): string {
  const keys = key.split(".");
  let locale = currentLocale;

  if (typeof window !== "undefined")
    locale = getLocaleFromUrl(window.location.href) || currentLocale;
  if ((global as any)?.locale)
    locale = (global as any)?.locale || currentLocale;

  let value: any = (messages as any)[locale];

  for (const k of keys) {
    value = value[k];
    if (!value) return key;
  }

  return value;
}

t.getLocale = () => {
  let locale = currentLocale;
  if (typeof window !== "undefined")
    (locale as "fr" | "en") =
      getLocaleFromUrl(window.location.href) || currentLocale;
  if ((global as any)?.locale)
    locale = (global as any)?.locale || currentLocale;

  return locale;
};
