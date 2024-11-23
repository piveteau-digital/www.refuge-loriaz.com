import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  icons: [
    {
      rel: "favicon",
      url: "/assets/images/icon.png"
    }
  ],
  openGraph: {
    title: 'Refuge de Loriaz - Mountain Refuge at 2020m',
    description: 'Experience the beauty of the Alps at Refuge de Loriaz, a mountain refuge located at 2020m altitude. Book your stay and enjoy winter sports in a breathtaking setting.',
    images: [
      "/assets/images/og.jpeg"
    ]
  },
  twitter: {
    title: 'Refuge de Loriaz - Mountain Refuge at 2020m',
    description: 'Experience the beauty of the Alps at Refuge de Loriaz, a mountain refuge located at 2020m altitude. Book your stay and enjoy winter sports in a breathtaking setting.',
    images: [
      "/assets/images/og.jpeg"
    ]
  },
  title: 'Refuge de Loriaz - Mountain Refuge at 2020m',
  description: 'Experience the beauty of the Alps at Refuge de Loriaz, a mountain refuge located at 2020m altitude. Book your stay and enjoy winter sports in a breathtaking setting.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}