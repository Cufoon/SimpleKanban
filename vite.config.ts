import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  html: { cspNonce: 'cufoon' },
  css: {
    modules: {
      exportGlobals: true,
      generateScopedName: '[hash:base64:12]',
      localsConvention: 'camelCaseOnly'
    }
  },
  plugins: [react()],
  clearScreen: false
});
