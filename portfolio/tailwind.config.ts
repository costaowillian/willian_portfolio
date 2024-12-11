/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      sm: "880px"
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1118px"
      }
    },
    extend: {
      colors: {
        primary: "#4F56D3",
        primary_100: "#D3D5FC",
        secondary: "#088770",
        secondary_500: "#33CCCC",
        custom_black: "#292929",
        soft_white: "#F9F6F6"
      }
    },
    boxShadow: {
      lg: "0px 2px 10px 0px rgba(0, 0, 0, 0.15)",
      negative: "0px -1px 10px 0px #00000026"
    }
  },
  plugins: [require("daisyui")]
} satisfies Config;
