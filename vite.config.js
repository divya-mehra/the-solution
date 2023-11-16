import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/components/Layout/variables.scss";`, // Optional: Import your SCSS variables here
      },
    },
  },
  // base: '/the-solution.co/',
  // base: '/dist/',
});
