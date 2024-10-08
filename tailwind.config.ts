import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2000px",
      normalphone: "400px",
      uglyphone: "300px",
    },
    extend: {
      fontFamily: {
        helvetica: "var(--font-helvetica)",
        helveticabold: "var(--font-helvetica-bold)",
        aksara: "var(--font-aksara)",
        titles: "var(--font-titles)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: { colors: { primary: "#f0b90b" } },
      },
    }),
    flowbite.plugin(),
  ],
};
export default config;
