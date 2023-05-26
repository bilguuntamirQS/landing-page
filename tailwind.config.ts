import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueGray: {
          50: "#f9fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#93c5fd",
          400: "#64748b",
          500: "#3b82f6",
          600: "#1e293b",
        },
        body: "#1e293b",
      },
      fontFamily: {
        heading: "Poppins, sans-serif",
        body: "Montserrat, sans-serif",
      },
    },
  },
  plugins: [],
} satisfies Config;
