import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/our-day-invitation/', // 이게 매우 중요!
  plugins: [react()],
});
