import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nuit-resa.com'),
  title: {
    default: 'Refuge de Loriaz - Hébergement en montagne à 2020m',
    template: '%s | Refuge de Loriaz'
  },
  description: 'Découvrez le Refuge de Loriaz, un hébergement authentique à 2020m d\'altitude. Profitez de la demi-pension, des randonnées guidées et d\'une vue imprenable sur les Alpes.',
  keywords: ['refuge', 'montagne', 'alpes', 'randonnée', 'hébergement', 'demi-pension', 'Loriaz'],
  authors: [{ name: 'Refuge de Loriaz' }],
  creator: 'Refuge de Loriaz',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://nuit-resa.com',
    title: 'Refuge de Loriaz - Hébergement en montagne à 2020m',
    description: 'Découvrez le Refuge de Loriaz, un hébergement authentique à 2020m d\'altitude.',
    siteName: 'Refuge de Loriaz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refuge de Loriaz - Hébergement en montagne à 2020m',
    description: 'Découvrez le Refuge de Loriaz, un hébergement authentique à 2020m d\'altitude.',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}