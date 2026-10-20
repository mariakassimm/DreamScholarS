import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          50: "#EFF4FE",
          100: "#DCE7FD",
          200: "#B9CFFB",
          300: "#8FB0F8",
          400: "#5D8AF3",
          500: "#2563EB",
          600: "#1E4FC2",
          700: "#183D97",
          800: "#132E70",
          900: "#0E2154",
        },
        accent: {
          DEFAULT: "#7C3AED",
          50: "#F4EEFE",
          100: "#E7D9FC",
          500: "#7C3AED",
          600: "#6B2FCB",
        },
        surface: "#F8FAFC",
        ink: {
          DEFAULT: "#0F172A",
          soft: "#334155",
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-lexend)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(15, 23, 42, 0.06)",
        card: "0 4px 20px rgba(15, 23, 42, 0.08)",
        lifted: "0 12px 40px rgba(15, 23, 42, 0.12)",
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
