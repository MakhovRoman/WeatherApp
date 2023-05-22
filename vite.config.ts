import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import path from 'path'
import { defineConfig } from 'vite'

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
      '@styles': path.resolve(__dirname, 'src', 'styles'),
      '@typings': path.resolve(__dirname, 'typings'),
    }
  },
  define: {
    __WEATHER_URL__: JSON.stringify(process.env.WEATHER_URL),
    __WEATHER_API_KEY__: JSON.stringify(process.env.WEATHER_API_KEY),
    __WEATHER_API_HOST__: JSON.stringify(process.env.WEATHER_API_HOST),
  },
  plugins: [react()],
})
