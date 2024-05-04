import type {Config} from "tailwindcss";

import {nextui} from "@nextui-org/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|chip|dropdown|modal|navbar|ripple|spinner|menu|divider|popover).js",
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
        primary: "#0F969C",
        secondary: "#0C7075",
        foreground: "#072E33",
        default: "#294D61",
        light: "#6DA5C0",
        dark: "#05161A",
        warning: "#F7B750",
        success: "#45D483",
        danger: "#F54180",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
