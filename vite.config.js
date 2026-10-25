import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // expose on LAN so you can test on a real phone
    port: 5173,
    allowedHosts: ['4208-2409-40c1-303e-928e-d817-e0ee-55de-975f.ngrok-free.app']
  },
})
