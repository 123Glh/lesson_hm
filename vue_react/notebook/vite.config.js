import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createStyleImportPlugin } from 'vite-plugin-style-import';
import Path from 'path';
export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'zarm',
          esModule: true,
          resolveStyle: (name) => `zarm/es/${name}/style/css`, // 确保路径正确
        },
      ],
    }),
  ],
  css: {
    modules: {
      localsConvention: 'dashesOnly'
    },
  },
  resolve: {
    alias: {
      '@': Path.resolve(__dirname, 'src'),
      'utils': Path.resolve(__dirname, 'src/utils'),
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001/',
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});