import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// vite.config.js
export default defineConfig({
  base: '/our-day-invitation/', // 반드시 슬래시 포함해서 정확히 써야 함
  plugins: [react()],
});
