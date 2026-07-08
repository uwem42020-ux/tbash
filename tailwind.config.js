/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#024283',   // main brand colour
          dark: '#011f3a',      // darker shade for hover effects
          light: '#0359a8',     // optional lighter variant
        },
      },
    },
  },
  plugins: [],
}