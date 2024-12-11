import locales from "./locales.mjs";

export const defaultLocale = locales[0];

export const LocalePrefix = {
  "as-needed": "as-needed",
  always: "always",
  never: "never",
};

const namespaces = [
  "about",
  "access",
  "booking",
  "common",
  "contact",
  "landing",
  "pricing",
  "services",
]

const i18nextConfig = {
  locales,
  localePrefix: LocalePrefix["always"],
  defaultLocale: locales[0],
  namespaces
};

export default i18nextConfig;
