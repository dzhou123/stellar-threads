import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stellar Threads | Premium American Flag Merchandise",
  description: "Premium American flag merchandise for those who wear their patriotism with pride. Quality flags, apparel, and accessories.",
  keywords: ["American flag", "patriotic merchandise", "USA apparel", "flags", "American pride"],
  openGraph: {
    title: "Stellar Threads | Premium American Flag Merchandise",
    description: "Premium American flag merchandise for those who wear their patriotism with pride.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
