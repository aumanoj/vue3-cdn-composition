// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true, // Open the browser automatically when the development server starts
  },
  build: {
    outDir: 'dist', // Output directory for production build
    assetsDir: 'assets', // Directory for assets (CSS, images, etc.)
    minify: 'terser', // Minify code using Terser
    rollupOptions: {
      input: 'index.html', // Entry point HTML file
    },
  },
});


