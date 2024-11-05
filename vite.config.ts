import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/dysfunctionalive/",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/_mantine";`,
      },
    },
  },
})
