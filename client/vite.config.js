import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import PostcssNested from 'postcss-nested';

export default defineConfig({
  plugins: [react(), PostcssNested()],
  server: {
    port: 3002,
    open: true
  }
})