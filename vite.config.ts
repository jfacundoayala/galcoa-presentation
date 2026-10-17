import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/** Dominio público para las etiquetas de vista previa (WhatsApp, LinkedIn…). En Vercel se completa solo. */
const siteUrl = (): Plugin => ({
  name: 'site-url',
  transformIndexHtml: (html) => {
    const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
    return html.replaceAll('%SITE_URL%', host ? `https://${host}` : '');
  },
});

export default defineConfig({
  plugins: [react(), siteUrl()],
  server: {
    port: 3000,
    open: false,
  },
});
