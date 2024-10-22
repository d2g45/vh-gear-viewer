import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-source-code-pro)"],
        sourceCodePro: ["var(--font-source-code-pro)"],
        sans: ["var(--font-rajdhani)"],
        rajdhani: ["var(--font-rajdhani)"],
      },

      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1366px",
        "2xl": "1440px",
        "3xl": "1600px",
        "4xl": "1920px",
        huge: "1920px",
        "5xl": "2560px",
        tremendous: "2560px",
        "6xl": "3840px",
        gargantuan: "3840px",
        print: { raw: "print" },
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-scrollbar")],
};
export default config;
