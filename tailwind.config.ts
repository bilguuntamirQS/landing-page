import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueGray: {
          50: "#f9fafc",
          100: "#f1f5f9",
          400: "#3b82f6",
          500: "#64748b",
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
