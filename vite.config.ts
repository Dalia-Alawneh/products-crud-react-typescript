import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['uuid'],
    },
    target: [
      'node14',
      'node > 16'
    ],
  },
})
