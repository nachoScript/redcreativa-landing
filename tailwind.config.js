/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans"],
      },
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        accent: {
          400: "#f472b6", // pink
          500: "#ec4899",
        },
        violet: {
          400: "#a78bfa",
          500: "#8b5cf6",
        },
        mint: {
          400: "#34d399",
          500: "#10b981",
        },
        sun: {
          400: "#fbbf24",
          500: "#f59e0b",
        },
        surface: {
          50: "#f7f8fb",
          100: "#eef1f7",
          900: "#050505",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.35)",
        glowPink: "0 0 40px rgba(236,72,153,0.35)",
        glowViolet: "0 0 40px rgba(139,92,246,0.35)",
      },
    },
  },
  plugins: [],
};
