import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1128",
          50: "#E6E8EC",
          100: "#CDD1D9",
          200: "#9BA3B3",
          300: "#69758C",
          400: "#374766",
          500: "#0A1128",
          600: "#080E20",
          700: "#060A18",
          800: "#040710",
          900: "#020308",
        },
        crimson: {
          DEFAULT: "#B22222",
          50: "#F9E8E8",
          100: "#F3D1D1",
          200: "#E7A3A3",
          300: "#DB7575",
          400: "#CF4747",
          500: "#B22222",
          600: "#8E1B1B",
          700: "#6A1414",
          800: "#460D0D",
          900: "#220606",
        },
        silver: {
          DEFAULT: "#C0C0C0",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#E8E8E8",
          400: "#D4D4D4",
          500: "#C0C0C0",
          600: "#A0A0A0",
          700: "#808080",
          800: "#606060",
          900: "#404040",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
