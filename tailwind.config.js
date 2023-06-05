/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        about: "url('/src/assets/img/profile_background.png')",
      },
    },
  },
  plugins: [],
};
