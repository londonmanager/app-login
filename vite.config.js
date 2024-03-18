import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE_URL = 'https://d1q3n7jfsudqp9.cloudfront.net/app'
const BASE_URL_LOCAL = 'http://localhost:5173'

export default defineConfig({
  plugins: [react()],
  base: BASE_URL
})
