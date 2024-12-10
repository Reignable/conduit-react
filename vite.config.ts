import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// eslint-disable-next-line no-restricted-exports
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ['./setup-test.ts'],
    environment: 'jsdom',
  },
})
