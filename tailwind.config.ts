import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0A0C14",
        },
        primary: {
          DEFAULT: "#2B2F42",
        },
        secondary: {
          DEFAULT: "#3A4156",
        },
        tertiary: {
          DEFAULT: "#0F121E",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        green: {
          DEFAULT: "#93D333",
        },
        red: {
          DEFAULT: "#D84848",
        },
      },
      fontFamily: {
        dinroundpro: ["var(--font-Dinroundpro)"],
      },
      borderRadius: {
        DEFAULT: "2px",
        full: "9999px",
      },
    },
  },
  plugins: [],
} satisfies Config;
