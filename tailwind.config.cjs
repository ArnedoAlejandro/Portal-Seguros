/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e3a8a", // azul sobrio
        },
        secondary: {
          DEFAULT: "#64748b", // gris
        },
      },
    },
  },
  plugins: [],
};
