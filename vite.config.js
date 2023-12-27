import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      admin: resolve(__dirname, 'src'),
      assets: resolve(__dirname, 'src', 'assets'),
      "ui-component": resolve(__dirname, 'src', 'ui-component'),
      "layout": resolve(__dirname, 'src', 'layout'),
      features: resolve(__dirname, 'src', 'features')
    }
  }
})
