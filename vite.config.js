import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: '3000',
  },
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: resolve(__dirname, './src/components'),
      },
      {
        find: '@pages',
        replacement: resolve(__dirname, './src/pages'),
      },
      {
        find: '@store',
        replacement: resolve(__dirname, './src/store'),
      },
      {
        find: '@hooks',
        replacement: resolve(__dirname, './hooks'),
      },
      {
        find: '@public',
        replacement: resolve(__dirname, './public'),
      },
      {
        find: '@ratsprite',
        replacement: resolve(__dirname, './src/ratspritesheet'),
      },
      {
        find: '@texture',
        replacement: resolve(__dirname, './src/texture'),
      },
    ],
  },
})
