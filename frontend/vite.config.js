import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    proxy:{
      "https://chatapp-sigma-eight.vercel.app/api":{
        target:"https://chatapp-sigma-eight.vercel.app",
        ws: true,
        
      }
    }
  }
})
