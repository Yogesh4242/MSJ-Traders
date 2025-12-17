import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/", // 🔹 VERY IMPORTANT for Hostinger (root domain)
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist", // default, but keeping it explicit
    assetsDir: "assets",
    sourcemap: false,

    // 🔹 Ensures proper JS module output (prevents "text/html" MIME error)
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
      },
    },
  },

  // 🔹 Fix MIME & routing issues during local preview (simulate Hostinger properly)
  preview: {
    port: 4173,
    strictPort: true,
  },
});
