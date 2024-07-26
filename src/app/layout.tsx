import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { NavBar } from "@/components/organisms/NavBar";
import { Header } from "@/components/organisms/Header";

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
    <html lang="en" className="w-full flex justify-center">
      <body className="container p-[30px] sm:p-[32px]">
        <Header />
        {children}
      </body>
    </html>
  );
}
