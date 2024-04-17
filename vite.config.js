import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

/*// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: import.meta.env.VITE_PORT,
    host: import.meta.env.VITE_HOST,
  }
})*/

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  const HOST = env.VITE_HOST ?? '0.0.0.0';
  const PORT = parseInt(env.VITE_PORT) ?? 5173;
  return {
    // vite config
    plugins: [react()],
    server:{
      port: PORT,
      host: HOST,
    }
  }
})