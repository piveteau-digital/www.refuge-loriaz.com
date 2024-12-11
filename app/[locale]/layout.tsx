import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Refuge de Loriaz - Hébergement en montagne à 2020m",
    template: "%s | Refuge de Loriaz",
  },
  description:
    "Découvrez le Refuge de Loriaz, un hébergement authentique à 2020m d'altitude. Profitez de la demi-pension, des randonnées guidées et d'une vue imprenable sur les Alpes.",
  keywords: [
    "refuge",
    "montagne",
    "alpes",
    "randonnée",
    "hébergement",
    "demi-pension",
    "Loriaz",
  ],
  authors: [{ name: "Refuge de Loriaz" }],
  creator: "Refuge de Loriaz",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://nuit-resa.com",
    title: "Refuge de Loriaz - Hébergement en montagne à 2020m",
    description:
      "Découvrez le Refuge de Loriaz, un hébergement authentique à 2020m d'altitude.",
    siteName: "Refuge de Loriaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refuge de Loriaz - Hébergement en montagne à 2020m",
    description:
      "Découvrez le Refuge de Loriaz, un hébergement authentique à 2020m d'altitude.",
  },
  metadataBase: new URL("https://nuit-resa.com"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      //       { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      //       { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    //     apple: [
    //       { url: '/apple-touch-icon.png' },
    //     ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
  params: { locale } = { locale: "fr" },
}: {
  children: React.ReactNode;
  params: { locale: "fr" | "en" };
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers locale={locale}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
