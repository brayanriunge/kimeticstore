import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial":
          "radial-gradient(circle 588px at 31.7% 40.2%, rgba(225,200,239,1) 21.4%, rgba(163,225,233,1) 57.1%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "icon-arrow-down":
          "url('https://raw.githubusercontent.com/MizAndhre/FAQ-accordion-card/2ff2a02d093554f14d0390a409e825669313a16e/images/icon-arrow-down.svg')",
      },
      colors: {
        textBlue: "hsl(238, 29%, 16%)",
        textRed: "hsl(14, 88%, 65%)",
        textVeryDarkBlue: "hsl(237, 12%, 33%)",
        textDarkBlue: "hsl(240, 6%, 50%)",
        gradientViolet: "hsl(273, 75%, 66%)",
        gradientBlue: "hsl(240, 73%, 65%)",
        dividerGray: "hsl(240, 5%, 91%)",
        primaryclr: "#6c00f9",
        white: "#fff",
        "text-clr": "#464646",
        "tabs-list-bg-clr": "#dfc8fd",
        "btn-hvr": "#4e03b0",
      },
      fontFamily: {
        "kumbh-sans": ["Kumbh Sans", "sans-serif"],
      },
      spacing: {
        "22": "5.5rem",
        "28": "7rem",
      },
    },
  },
  plugins: [],
};
export default config;
