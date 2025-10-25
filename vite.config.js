
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: '/',
  server: {
    port: 3000, // Runs on http://localhost:3000
    open: true, // Automatically opens in browser
  },
  build: {
    outDir: 'dist', // Ensure this matches Vercel’s output directory
  },
});
