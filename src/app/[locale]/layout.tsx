import React from "react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { NextIntlClientProvider } from "next-intl";
import { DM_Serif_Text } from "next/font/google";
import "../globals.css";

const dmSerifText = DM_Serif_Text({ subsets: ["latin"], weight: ["400"] });

type Props = { children: React.ReactNode; params: { locale: string } };

export default async function LocaleLayout({ children, params }: Props) {
  const locale = params.locale || "en";
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div
        className={`w-full ${dmSerifText.className} bg-bg-white text-font-black`}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
