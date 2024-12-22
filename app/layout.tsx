import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Souvlucky Country",
  description: "Taste of Greece",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
