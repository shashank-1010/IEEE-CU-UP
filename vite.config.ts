import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "client"),

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },

  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      ".onrender.com",  // All Render subdomains
      ".vercel.app",    // Vercel domains (agar use karein to)
      ".railway.app",   // Railway domains (agar use karein to)
      "localhost",
      "127.0.0.1"
    ],
    
    // Agar CORS issues aa rahe hain to ye add karo
    cors: {
      origin: "*",
      credentials: true,
    },
    
    // Strict port checking disable karo
    strictPort: false,
    
    // Agar hmr ka issue aa raha ho
    hmr: {
      clientPort: 443, // Render uses HTTPS
    }
  },

  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    
    // Production optimizations
    minify: "terser",
    sourcemap: false,
    
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },

  // Environment variables
  define: {
    'process.env': {}
  },
  
  // Preview configuration (production build test ke liye)
  preview: {
    port: 4173,
    host: true,
    allowedHosts: [".onrender.com", "localhost"],
  },
});
