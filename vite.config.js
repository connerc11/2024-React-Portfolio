import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/2024-React-Portfolio",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});