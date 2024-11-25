import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Gera a build na pasta dist
  },
  server: {
    open: true, // Abre o navegador automaticamente no ambiente local
  },
});