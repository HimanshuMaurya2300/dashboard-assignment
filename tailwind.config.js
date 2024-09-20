/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: { md: { max: "1023px" }, sm: { max: "475px" } },
    extend: {
      colors: {
        blue: {
          50: "var(--blue_50)",
          a200: "var(--blue_a200)"
        },
        blue_gray: {
          50: "var(--blue_gray_50)",
          500: "var(--blue_gray_500)",
          900: "var(--blue_gray_900)",
          "900_01": "var(--blue_gray_900_01)",
          "900_02": "var(--blue_gray_900_02)",
        },
        deep_orange: { 50: "var(--deep_orange_50)" },
        gray: {
          50: "var(--gray_50)",
          200: "var(--gray_200)",
          300: "var(--gray_300)",
          400: "var(--gray_400)",
          700: "var(--gray_700)",
          "400_01": "var(--gray_400_01)",
          "50_01": "var(--gray_50_01)",
          "700_7f": "var(--gray_700_7f)",
        },
        indigo: { 900: "var(--indigo_900)" },
        pink: { a100: "var(--pink_a100)" },
        red: { 50: "var(--red_50)", a200: "var(--red_a200)" },
        white: { a700: "var(--white_a700)", a700_99: "var(--white_a700_99)", a700_cc: "var(--white_a700_cc)" },
      },
      boxShadow: {},
      fontFamily: { roboto2: 'Roboto', rubik2: 'Rubik' }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}