import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    base: env.VITE_BASE_PATH || process.env.VITE_BASE_PATH || "/",
    build: {
      outDir: "dist/client",
    },
    server: {
      host: "0.0.0.0",
      allowedHosts: ["terminal.local"],
    },
    plugins: [react()],
  };
});
