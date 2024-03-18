import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE_URL =
  'https://londonmanager-frontend-app.s3.sa-east-1.amazonaws.com/app'
const BASE_URL_LOCAL = 'http://localhost:5173'

export default defineConfig({
  plugins: [react()],
  base: BASE_URL
})
