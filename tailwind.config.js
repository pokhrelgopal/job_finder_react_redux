/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      gray: "#f5f6f8",
      indigo: "#5964e0",
      lightGray: "#e6e6e6",
      lighterGray: "#343541",
      dark: "#10141f",
      lessDark: "#161d2f",
    },
    extend: {},
  },
  plugins: [],
};
