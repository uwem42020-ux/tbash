import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tbash Global Limited | Premium Real Estate Solutions",
  description: "Tbash Global Limited - Your trusted partner for real estate investments, property listings, and exceptional property solutions across Nigeria.",
  openGraph: {
    title: "Tbash Global Limited | Premium Real Estate Solutions",
    description: "Discover premium properties, investment opportunities, and exceptional real estate services with Tbash Global Limited.",
    url: "https://tbashgloballimited.com",
    siteName: "Tbash Global Limited",
    images: [
      {
        url: "https://tbashgloballimited.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tbash Global Limited - Premium Real Estate Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tbash Global Limited | Premium Real Estate Solutions",
    description: "Discover premium properties and real estate investment opportunities with Tbash Global Limited.",
    images: ["https://tbashgloballimited.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}