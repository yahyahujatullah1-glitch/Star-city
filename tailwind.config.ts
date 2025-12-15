import type { Config } from "tailwindcss"; // <--- This was the fix

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        staff: {
          bg: "#050a05",
          surface: "#0D140D", 
          surfaceLight: "#1a261a",
          primary: "#4ADE80",
          primaryDark: "#22c55e",
          warning: "#F59E0B",
          error: "#EF4444",
          text: "#E2E8F0",
          muted: "#94A3B8",
        },
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle at 50% 0%, rgba(74, 222, 128, 0.1) 0%, transparent 50%)',
      }
    },
  },
  plugins: [],
};
export default config;
