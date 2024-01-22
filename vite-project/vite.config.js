import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server:{
      proxy:{
        '/api': 'http://localhost:5001/login'
      },
    },
  plugins: [react()],
  build: {
    assetsInlineLimit: 0,
},
})
