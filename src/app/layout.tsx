import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwiftMove Auto Transport | South Africa's #1 Car Transport Company",
  description:
    "SwiftMove Auto Transport – South Africa's trusted car transport company. We deliver your vehicle safely across Johannesburg, Cape Town, Durban, and all major cities. Get a free quote today!",
  keywords:
    "car transport South Africa, vehicle transport, auto transport, car shipping, Johannesburg, Cape Town, Durban",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  );
}
