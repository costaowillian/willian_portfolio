/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#088770",
        "custom-purple": "#4F56D3",
        "custom-almond": "#EAE6DC",
        "custom-balck": "#292929",
      },
    },
  },
  plugins: [require("daisyui")],
};
