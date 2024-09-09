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
      normalphone: "400px",
      uglyphone: "300px",
    },
    extend: {
      fontFamily: {
        helvetica: "var(--font-helvetica)",
        helveticabold: "var(--font-helvetica-bold)",
        aksara: "var(--font-aksara)",
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
