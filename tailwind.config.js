/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#314473",
        secondary: "#51bcdd",
        accent: "#FF6B6B",
        text: "#080A44",
        lightText: "#393C6B",
        background: "#FFFFFF",
        lightBackground: "#F8F9FA",
        border: "#EEEEEE",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.1)",
      },
      container: {
        center: true,
        padding: "1.25rem",
      },
    },
  },
  plugins: [],
};