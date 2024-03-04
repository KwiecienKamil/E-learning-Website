import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '500px',
      'md': '700px',
      'lg': '1000px',
      'xl': '1300px',
      '2xl': '1500px',
    },
    extend: {
      colors: {
        primary: "#FF782D",
        whiteGray: "#F5F5F5",
        navHover: "#E8E6E6",
        gradient1: "#FFC634",
        gradient2: "#6DCEAE"
      },
      fontFamily: {
        logo: "Source Code Pro",
        exo:  "Exo"
      },
    },
  },
  plugins: [],
};
export default config;
