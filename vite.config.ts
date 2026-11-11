import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// base: './' makes built asset URLs relative, so the site works whether it is
// served from a custom domain (ddtech.lt) or a GitHub Pages project subpath
// (https://<user>.github.io/<repo>/) without extra config.
export default defineConfig({
  base: './',
  plugins: [react()],
})
