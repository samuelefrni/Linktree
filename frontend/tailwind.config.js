/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, rgba(47, 47, 47, 1), rgba(33, 33, 33, 0.90))",
      },
    },
  },
  plugins: [],
};
