import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        russo: ['"Russo One"', 'sans-serif'],
        changa: ['"Changa One"', 'sans-serif'],
      },
    }  },
  plugins: [],
};

export default config;