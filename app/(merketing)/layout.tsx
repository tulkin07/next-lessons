import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";

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
    default:"Bizda online dokoni ",
    template:"%s | Bizda"
  },
  description:"Bizda internet do'koni - kitoblar, elektronika, maishiy texnika va boshqalar ✔️ O'zbekiston bo'ylab tez yetkazib berish ⭐Arzon narxlar ☝ Keng assortiment ⚡ Chegirmalar ⌚ Bo'lib to'lash",
  openGraph: {
    type: "website",
    siteName: "Test",
    title: "Test — Qurilish uchun hammasi!",
    description:
      "Test uchun kerakli mahsulotlarni Bizda bilan toping.",
    url: "https://next-lessons-pi.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Test — Qurilish uchun hammasi!",
      },
    ],
    locale: "uz_UZ",
  },
}



export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="uz"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex h-full min-h-full flex-col bg-slate-50 text-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}