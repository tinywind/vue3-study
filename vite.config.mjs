import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath} from 'node:url'

export default defineConfig({
  plugins: [vue()],
  envPrefix: 'VUE_APP_',
  resolve: {
    alias: {'@': fileURLToPath(new URL('./src', import.meta.url))},
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  test: {
    environment: 'jsdom',
    include: ['test/**/*.test.js'],
    environmentOptions: {jsdom: {runScripts: 'dangerously'}},
  },
})
