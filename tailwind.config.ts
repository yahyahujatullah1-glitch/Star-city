import type { Config } from "ts";

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
          bg: "#050a05", // Deepest black-green
          surface: "#0D140D", // The card background
          surfaceLight: "#1a261a", // Lighter card
          primary: "#4ADE80", // Neon Green
          primaryDark: "#22c55e",
          warning: "#F59E0B", // Amber
          error: "#EF4444",
          text: "#E2E8F0",
          muted: "#94A3B8",
        },
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle at center, rgba(74, 222, 128, 0.15) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
};
export default config;
