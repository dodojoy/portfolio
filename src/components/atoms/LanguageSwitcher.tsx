"use client";

import { usePathname, useRouter } from "next/navigation";

type Locale = "en" | "pt";

function replaceLocaleInPath(pathname: string, nextLocale: Locale): string {
  const segments = pathname.split("/");
  if (segments.length > 1) {
    segments[1] = nextLocale;
  }
  return segments.join("/");
}

export const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const current = (pathname?.split("/")[1] as Locale) || "en";

  const switchTo = (locale: Locale) => {
    const target = replaceLocaleInPath(pathname || "/en", locale);
    router.push(target);
    router.refresh();
  };

  return (
    <div className="flex items-center gap-[10px]">
      <button
        aria-label="Switch to Portuguese"
        className={`uppercase text-sm ${
          current === "pt" ? "font-bold" : "opacity-70"
        }`}
        onClick={() => switchTo("pt")}
      >
        pt
      </button>
      <span className="opacity-40">|</span>
      <button
        aria-label="Switch to English"
        className={`uppercase text-sm ${
          current === "en" ? "font-bold" : "opacity-70"
        }`}
        onClick={() => switchTo("en")}
      >
        en
      </button>
    </div>
  );
};
