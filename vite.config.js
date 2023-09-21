import { defineConfig } from 'vite'
import { ssr } from 'vite-plugin-ssr/plugin'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ssr({
      baseAssets: 'https://londonmanager-login.onrender.com/'
    })
  ]
})
