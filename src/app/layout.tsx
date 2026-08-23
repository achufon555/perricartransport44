import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wise Move Transport | South Africa's #1 Car Transport Company",
  description:
    "Wise Move Transport – South Africa's trusted car transport company. We deliver your vehicle safely across Johannesburg, Cape Town, Durban, and all major cities. Get a free quote today!",
  keywords:
    "car transport South Africa, vehicle transport, auto transport, car shipping, Johannesburg, Cape Town, Durban",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  );
}
