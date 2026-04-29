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
  title: "The Flag Authority | International Flags & Bunting for the 2026 World Cup",
  description: "Premium nation flags and 25-flag bunting strings, stocked for fans, venues, and crews getting ready for the 2026 FIFA World Cup in Houston.",
  keywords: ["world cup flags", "international flags", "nation flags", "bunting", "Houston World Cup 2026", "FIFA World Cup", "country flags"],
  openGraph: {
    title: "The Flag Authority | Flags for the World's Game",
    description: "Every nation, ready to fly. Premium flags and bunting for the 2026 FIFA World Cup.",
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
