import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig(({ mode }) => ({
  base:'/',
  plugins: [tailwindcss()],
}))


