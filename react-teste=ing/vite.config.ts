import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: 'http://145.223.27.98:5030',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, '/auth')
      },
      '/users': {
        target: 'http://145.223.27.98:5030',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/users/, '/users')
      },
      '/tasks': {
        target: 'http://145.223.27.98:5030',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/tasks/, '/tasks')
      },
      '/roadmaps': {
        target: 'http://145.223.27.98:5030',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/roadmaps/, '/roadmaps')
      },
      '/achievements': {
        target: 'http://145.223.27.98:5030',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/achievements/, '/achievements')
      }
    }
  }
});