/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React source files
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#1e40af",
        "light-blue": "#3b82f6",
        "dark-blue": "#1e3a8a",
      },
    },
  },
  plugins: [],
};
