import type { Config } from "tailwindcss";
import tailwindProse from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        meteor: {
          "0%": { transform: "translateY(-20%) translateX(-50%)" },
          "100%": { transform: "translateY(300%) translateX(-50%)" },
        },
        trail: {
          "0%": { "--angle": "0deg" },
          "100%": { "--angle": "360deg" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      display: ["group-hover"],
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        meteor: "meteor var(--duration) var(--delay) ease-in-out infinite",
        trail: "trail var(--duration) linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
    },
  },
  plugins: [tailwindProse()],
};
export default config;
