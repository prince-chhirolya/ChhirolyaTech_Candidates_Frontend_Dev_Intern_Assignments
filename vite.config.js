import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ["/src/main.jsx"]
    }
  },
  plugins: [react()],
})
