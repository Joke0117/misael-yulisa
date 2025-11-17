import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Se eliminó la importación de lovable-tagger

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Se eliminó "mode === 'development' && componentTagger()" de los plugins
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));