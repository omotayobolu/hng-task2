import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#121212",
        "secondary-black": "#4F4F4F",
        grey: "rgba(79,79,79,0.6)",
        "primary-orange": "#B05405",
      },
      fontFamily: {
        elmessiri: ["var(--font-elmessiri)"],
        aeonik: ["var(--font-aeonik)"],
      },
      backgroundImage: {
        "hero-bg": 'url("/assets/hero-bg.png")',
        tick: 'url("/assets/tick.svg")',
      },
    },
  },
  plugins: [],
};
export default config;
