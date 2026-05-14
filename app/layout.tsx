import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vital Rights Foundation",
    template: "%s | Vital Rights Foundation",
  },

  description:
    "Vital Rights Foundation promotes human rights, health equity, sexual and reproductive health rights (SRHR), and access to justice in Malawi.",

  keywords: [
    "Vital Rights Foundation",
    "VRF Malawi",
    "Human Rights Malawi",
    "SRHR Malawi",
    "Health Equity Malawi",
    "Access to Justice Malawi",
    "NGO Malawi",
    "Sexual Reproductive Health Rights",
    "Legal Empowerment Malawi",
  ],

  authors: [
    {
      name: "Vital Rights Foundation",
    },
  ],

  creator: "Vital Rights Foundation",

  metadataBase: new URL("https://vitalrightsfoundation.com/"), 

  openGraph: {
    title: "Vital Rights Foundation",
    description:
      "Promoting human rights, health equity, and access to justice in Malawi.",

    url: "https://vitalrightsfoundation.com/",

    siteName: "Vital Rights Foundation",

    images: [
      {
        url: "/vrflogo.png",
        width: 1200,
        height: 630,
        alt: "Vital Rights Foundation",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Vital Rights Foundation",

    description:
      "Promoting human rights, health equity, and access to justice in Malawi.",

    images: ["/v.png"],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">

        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="flex-1 pt-18">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}