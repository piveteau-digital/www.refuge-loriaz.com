"use client";
import { type PropsWithChildren } from "react";
import { NextIntlClientProvider } from "next-intl";
import getDefaultMessages from "@/messages";
import { Toaster } from "sonner";
import { defaultLocale } from "@/navigation";
import { ErrorBoundary } from "@/components/utils/ErrorBoundaries";
import { ThemeProvider } from '@/components/theme-provider';

export const Providers = ({
  children,
  locale = defaultLocale as "fr",
}: PropsWithChildren<{
  locale: "fr" | "en";
  authGuard?: boolean;
}>) => {
  const messages = getDefaultMessages(locale);
  const isDev = process.env.NODE_ENV === "development";

  if (!isDev) {
    // eslint-disable-next-line no-console
    if (typeof window !== "undefined")
      window.console.error = () =>
        // eslint-disable-next-line no-console
        console.info("Error are disabled in production");
  }
  return (
    <ErrorBoundary>
      <NextIntlClientProvider
        timeZone="Europe/Paris"
        messages={messages}
        locale={locale}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
            <Toaster />
      </NextIntlClientProvider>
    </ErrorBoundary>
  );
};
