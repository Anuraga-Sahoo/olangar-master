/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        examys: {
          50: "#eef3ff",
          100: "#e0e9ff",
          200: "#c7d6fe",
          300: "#a5bbfc",
          400: "#8195f8",
          500: "#6270f2",
          600: "#4548e6",
          700: "#3333c2",
          800: "#3032a3",
          900: "#2e3181",
          950: "#1b1c4b",
        },
      },
    },
  },
  plugins: [],
};
