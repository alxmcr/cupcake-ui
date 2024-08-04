import react from "@vitejs/plugin-react";
import { UserConfig, defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
function getConfigVite({ mode = "production" }: UserConfig) {
  const env = loadEnv(mode, process.cwd());

  const configVite: UserConfig = {
    plugins: [react()],
    server: {
      host: true,
      port: parseInt(env.VITE_APP_PORT) || 3000,
      watch: {
        usePolling: true,
      },
    },
  };

  return configVite;
}
export default defineConfig(getConfigVite);
