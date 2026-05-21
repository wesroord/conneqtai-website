import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#050508",
          2: "#0a0a10",
          3: "#0f0f18",
        },
        accent: {
          DEFAULT: "#6c63ff",
          2: "#00d4aa",
          3: "#7b8cff",
        },
      },
      animation: {
        blink: "blink 2s ease infinite",
        pulse2: "pulse2 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease both",
        typingBounce: "typingBounce 0.8s ease infinite",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.3" } },
        pulse2: {
          "0%,100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        typingBounce: {
          "0%,80%,100%": { transform: "scale(1)" },
          "40%": { transform: "scale(1.3)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
