/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        start: "var(--secondary-1)",
        mid: "var(--secondary-2)",
        end: "var(--secondary-3)",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      transitionDuration: {
        600: "600ms",
      },
    },
  },
  plugins: [],
};
