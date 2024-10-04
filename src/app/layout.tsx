import './globals.css';

import type { Metadata } from 'next';

import localFont from 'next/font/local';

import { jsonLd } from '@/data';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// TODO: dynamic-metadata (https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata)

export const metadata: Metadata = {
  metadataBase: new URL('https://ras-tech.com'),
  generator: 'Next.js',
  applicationName: 'Ras-Tech (Portfolio)',
  referrer: 'origin-when-cross-origin',
  description: 'Ras-Tech - The Best Tech Company',
  keywords: ['technology', 'website', 'application'],
  category: 'technology',
  authors: [{ name: 'Ras-Tech', url: 'https://ras-tech.com' }],

  title: {
    default: 'Ras-Tech',
    template: '%s | Ras-Tech',
  },

  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },

  openGraph: {
    title: 'Ras-Tech',
    description: 'Ras-Tech - The Best Tech Company',
    url: 'https://ras-tech.com',
    siteName: 'Ras-Tech (Portfolio)',
    images: [
      {
        url: 'https://ras-tech.com/og.png',
        width: 800,
        height: 600,
        alt: 'Ras-Tech',
      },
      {
        url: 'https://ras-tech.com/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'Ras-Tech',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ras-Tech',
    description: 'Ras-Tech - The Best Tech Company',
    creator: '@ras',
    images: [{ url: 'https://ras-tech.com/og.png', alt: 'Ras-Tech' }],
    site: '@ras',
  },

  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      {
        url: '/favicon-dark.ico',
        type: 'image/x-icon',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    shortcut: '/favicon-16x16.ico',
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  manifest: 'https://ras-tech.com/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
