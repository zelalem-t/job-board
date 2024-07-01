import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
            
            center: true,
            screens: {
              sm: "640px",
              md: "768px",
              lg: "1024px",
              xl: "1280px",
            },
            padding: {
              DEFAULT: "1.5rem",
              sm: "1rem",
              md: "1.5rem",
              lg: "2rem",
              xl: "2.5rem",
            },
    
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
