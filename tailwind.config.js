/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-dark": "#0e0f12",
        placeholder: "#474646",
        "input-dark": "#151619",
        "purple-button": "#6e00f8",
        "link-pink": "#eb5aff",
        "google-blue": "#4C8BF5",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      dropShadow: {
        "button-shadow": "0 0 10px #6e00f8",
        "google-blue": "0 0 10px #4C8BF5",
      },
    },
  },
  plugins: [],
};
