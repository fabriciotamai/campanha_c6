import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';


export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', 
  },
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://app.blackpay.io',
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
