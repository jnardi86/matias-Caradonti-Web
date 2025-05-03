/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryBlue: "#15315B",
        AccentLightBlue: "#D8E6F5",
        AccentGray: "#F2F2F2",
        TextDark: "#1E1E1E",
        White: "#FFFFFF",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          // DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeDown: {
          "0%": { opacity: 0, transform: "translateY(-30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeDown: "fadeDown 1s ease-out forwards",
        fadeUp: "fadeUp 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
