import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'lucide': ['lucide-react'],
          'data-blog': ['./src/blogData.js'],
          'data-services': ['./src/servicesData.jsx']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});
