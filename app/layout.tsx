import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { generateMetadata } from "./components/SEO";
import JsonLd from "./components/JsonLd";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <meta name="google-site-verification" content="5mAM5b2AU2ijdyRFKokDSX1NQ6b22MibtjoO2wRlsR8" />
        <meta name="geo.region" content="ID-JI" />
        <meta name="geo.placename" content="Karangasem, Sukoharjo" />
        <meta name="geo.position" content="-7.623456;110.823456" />
        <meta name="ICBM" content="-7.623456, 110.823456" />
        <meta name="business.contact_data.locality" content="Karangasem" />
        <meta name="business.contact_data.region" content="Sukoharjo" />
        <meta name="business.contact_data.country" content="Indonesia" />
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
