// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  base: "/portfolio-laura/", // Reemplaza con el nombre de tu repositorio
  output: "static", // Asegura que Astro genere archivos estáticos
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  content: {
    collections: ['projects'], 
  },
});
