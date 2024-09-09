/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#088770",
        "custom-purple": "#4F56D3",
        "custom-almond": "#EAE6DC",
        "custom-black": "#292929"
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"]
  }
};
