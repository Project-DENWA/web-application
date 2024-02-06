import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      light: {
        text: {
          colored: "#3174f4",
          main: { 100: "#0b090a", 50: "#a0a0a0" },
          primary: "#ffffff"
        },
        main: {
          colored: {
            100: "#3174f4",
            20: "rgba(49,116,244, 0.2)"
          },
          dark: '#0B090A',
          full: {
            black: "#00000",
            white: "#FFFFFF",
          },
          bg: {
            main: "#FFFFFF",
            primary: "#E6EEF5"
          }
        }
      },
      dark: {
        text: {
          colored: "#3174f4",
          main: { 100: "#FFFFFF", 50: "#a0a0a0" },
          primary: "#ffffff"
        },
        main: {
          colored: {
            100: "#3174f4",
            20: "rgba(49,116,244, 0.2)"
          },
          dark: '#FFFFFF',
          full: {
            black: "#FFFFFF",
            white: "#000000",
          },
          bg: {
            main: "#232328",
            primary: "#2D2D32"
          }
        }
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
