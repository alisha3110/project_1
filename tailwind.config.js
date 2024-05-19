/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-bg": "#f7efef",
        "theme-font": "#737171",
      },
    },
  },
  plugins: [],
};
