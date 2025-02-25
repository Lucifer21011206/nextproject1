/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",   // Pages Router (Next.js <=12)
    "./components/**/*.{js,ts,jsx,tsx}", // Components
    "./app/**/*.{js,ts,jsx,tsx}", // App Router (Next.js 13+)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
