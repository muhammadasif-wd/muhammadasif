import type {Config} from "tailwindcss";

import {nextui} from "@nextui-org/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|dropdown|image|pagination|popover).js",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
    screens: {
      xs: "475px",
      // => @media (min-width: 475px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ["JetBrains_Mono", "sans-serif"],
    },
    extend: {
      colors: {
        default: "#3f3f46",
        primary: "#000000",
        secondary: "#404040",
        light: "#FFFFFF",
        danger: "#ef4444",
        success: "#17c964",
        warning: "#f5a524",
        info: "#006FEE",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-scrollbar"), nextui()],
};

export default config;
