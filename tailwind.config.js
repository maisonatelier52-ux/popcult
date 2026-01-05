/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ REQUIRED for next-themes
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}", // you use this folder
  ],
  theme: {
    extend: {
       colors: {
        "indigo-surfoma": "#2E3A8C",
      },
    },
  },
  plugins: [],
};
