/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F56D3",
        secondary: "#088770",
        "secondary-500": "#33CCCC",
        black: "#292929",
        "soft-white": "#F9F5F5"
      }
    },
    plugins: [require("daisyui")]
  },
  plugins: []
} satisfies Config;
