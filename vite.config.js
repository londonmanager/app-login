import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE_URL = ''
const BASE_URL_LOCAL = 'http://localhost:5173'

export default defineConfig({
  plugins: [react()]
})
