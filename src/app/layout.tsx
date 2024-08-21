import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Header } from "@/components/organisms/Header";

import { DM_Serif_Text } from "next/font/google";
import { Footer } from "@/components/organisms/Footer";

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio by Joyce Teodoro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`w-full ${dmSerifText.className} bg-bg-white text-font-black`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
