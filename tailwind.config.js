/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "nsans-regular": ["Nsans Regular"],
        "nsans-light": ["Nsans Light"],
        "nsans-medium": ["Nsans Medium"],
        "nsans-bold": ["Nsans Bold"],
        "bebas-neue": ["Bebas Neue"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
