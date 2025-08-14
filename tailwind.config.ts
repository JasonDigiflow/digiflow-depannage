import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        violet: {
          DEFAULT: "#7B61FF",
          hover: "#9B5CFF",
          light: "#C24CF6",
          dark: "#5A41E6",
        },
        orange: {
          DEFAULT: "#FF8A00",
          hover: "#FFB300",
          light: "#FFC14D",
          dark: "#E67A00",
        },
        dark: {
          DEFAULT: "#0A0B12",
          muted: "#0F1117",
          card: "#141520",
          border: "rgba(255, 255, 255, 0.08)",
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          dark: "rgba(0, 0, 0, 0.4)",
        },
        accent: {
          blue: "#6EA8FE",
          success: "#22C55E",
          warning: "#F59E0B",
        },
        foreground: {
          DEFAULT: "#FFFFFF",
          muted: "#D1D5DB",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["Space Grotesk", "monospace"],
      },
      borderRadius: {
        glass: "18px",
        premium: "24px",
      },
      animation: {
        "glow": "glow 4s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "gradient": "gradient 8s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "rotate-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "violet-orange": "linear-gradient(135deg, #7B61FF 0%, #C24CF6 50%, #FF8A00 100%)",
        "orange-violet": "linear-gradient(135deg, #FF8A00 0%, #FFB300 50%, #7B61FF 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(123, 97, 255, 0.3)",
        "glow-orange": "0 0 40px rgba(255, 138, 0, 0.3)",
        premium: "0 20px 40px rgba(0, 0, 0, 0.2)",
        soft: "0 10px 30px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;