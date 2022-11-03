import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Server } from 'node:http'

// https://vitejs.dev/config/
// export default defineConfig({
//   Server: {
//     port: 3001,
//   },
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
      
//     }
//   }
// })


export default defineConfig({
  server: {
    port: 3001,
    proxy: {
      "/api": {
      target: "http://localhost:3000/",
      changeOrigin: true,
      },
      }
    },    
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});


