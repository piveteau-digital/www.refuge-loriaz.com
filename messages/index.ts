import nextI18nConfig from "@/config/i18n/next-i18n.config";

export default function getDefaultMessages(locale: "fr" | "en") {
  return nextI18nConfig.namespaces.reduce(
    (acc: { [key: string]: unknown }, ns: string) => ({
      ...acc,
      [ns]: require(`./${locale}/${ns}`),
    }),
    {},
  );
}
