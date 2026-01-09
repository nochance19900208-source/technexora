/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070A12",
          900: "#0B0F19",
          850: "#0E1424",
          800: "#111A2E"
        }
      }
    }
  },
  plugins: []
};
