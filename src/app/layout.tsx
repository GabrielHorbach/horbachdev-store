import type { Metadata, Viewport } from "next";
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
  title: "LuxeStore",
  description:
    "This is LuxeStore - Find the best products on the internet with the best prices here!",
  keywords: [
    "luxury",
    "store",
    "products",
    "best prices",
    "online shopping",
    "ecommerce",
  ],
  authors: [{ name: "LuxeStore" }],
  creator: "LuxeStore",
  publisher: "LuxeStore",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luxestore.com",
    title: "LuxeStore",
    description:
      "This is LuxeStore - Find the best products on the internet with the best prices here!",
    siteName: "LuxeStore",
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxeStore",
    description:
      "This is LuxeStore - Find the best products on the internet with the best prices here!",
    creator: "@luxestore",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
