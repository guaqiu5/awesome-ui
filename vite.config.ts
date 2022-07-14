import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  resolve:{
    alias:{
      '@':'/src/',      //格式一定要写对喽不然没有代码提示或者报错
    }
  }
})
