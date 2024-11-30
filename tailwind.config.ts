import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        gold: {
          DEFAULT: "#E0AA3E",
        },
        lightgold: {
          DEFAULT: "#f5ca5b",
        },
        blue: {
          DEFAULT: "#003D75",
        },
        cyan: {
          DEFAULT: "#33CEF1",
        },
        // TEXT
        black: {
          DEFAULT: "#505050",
        },
        gray: {
          DEFAULT: "#AAAAAA",
        },
        lightgray: {
          DEFAULT: "#E3E3E3",
        },
      },
      borderRadius: {
        DEFAULT: "2px",
        full: "9999px",
      },
    },
  },
  plugins: [],
} satisfies Config;
