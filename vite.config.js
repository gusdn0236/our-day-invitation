// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/our-day-invitation/', // ← 레포 이름에 맞게 base 경로 설정!
});
