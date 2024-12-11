import { getRequestConfig } from "next-intl/server";
import i18nextConfig from "@/config/i18n/next-i18n.config";
import { type AbstractIntlMessages } from "next-intl";
import { logger } from "@/lib/logger";
import { locales } from "./navigation";
import { notFound } from "next/navigation";

const { defaultLocale, namespaces } = i18nextConfig;

export async function getNSMessages({
  locale,
  ns,
}: {
  locale: string;
  ns: string;
}) {
  try {
    return (await import(`./messages/${locale}/${ns}.ts`)).default;
  } catch (e) {
    return (await import(`./messages/${defaultLocale}/${ns}.ts`)).default;
  }
}

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  const allMessages = await Promise.all(
    namespaces.map((ns) => {
      return new Promise((resolve) => {
        getNSMessages({ locale, ns })
          .then((messages) => resolve({ ns, messages }))
          .catch((e) => {
            logger.warn(`Messages not found for : ${ns} in locale: ${locale}`);
            logger.warn(e);
            resolve({ ns, messages: {} });
          });
      });
    }),
  );

  const messages = allMessages.reduce(
    (acc, cur: unknown) => ({
      ...(acc || {}),
      [(cur as { ns: string }).ns]: (cur as { messages: AbstractIntlMessages })
        .messages,
    }),
    {},
  );

  return {
    timeZone: "Europe/Paris",
    messages,
  } as {
    messages: AbstractIntlMessages;
    timeZone: string;
  };
});
