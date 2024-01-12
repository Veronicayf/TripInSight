import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import ViteEnvCompatible from 'vite-plugin-env-compatible';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteEnvCompatible()],
})
