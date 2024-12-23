import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Définit "@" comme alias pour le dossier "src"
    },
  },
  build: {
    outDir: 'build', // Correspond à la sortie attendue par Vercel
  },
});
