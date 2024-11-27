/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gradientColorStops: {
        tmdbLightGreen: "rgba(30,213,169,1)",
        tmdbLightBlue: "rgba(1,180,228,1)",
      },
    },
  },
  plugins: [],
};
