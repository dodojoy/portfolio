import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      primary: "#f0d658",
      secondary: "#dcf4f4",
      "primary-dark":"#EAD158",
      "font-black": " #292929",
      "bg-white": "#f9f9f9",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/hero-img.svg')",
      }, gridTemplateColumns: {
        'auto-fit-minmax-auto': 'repeat(auto-fit, minmax(100px, auto))',
      },
    },
  },
  plugins: [],
};
export default config;
