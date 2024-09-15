/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-bg": "#f7efef",
        "theme-font": "#737171",
        "footer-color": "#e4e4e4",
      },
      width: {
        90: "90%",
        85: "85%",
      },
      backgroundImage: {
        modal_bg: "url('./assets/modal_bg.jpeg')",
      },
    },
  },
  plugins: [],
};
