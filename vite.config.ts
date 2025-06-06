import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

//! "my-repo-name" kısmını kendi GitHub reposunun adıyla değiştir!
export default defineConfig({
  base: '/my-repo-name/', // Örneğin: /my-react-app/
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // Listen on all local IPs
    port: 5173,
  },
});
