import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/profile/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/variables";`, // Adjust the path to your variables file
      },
    },
  },
})
