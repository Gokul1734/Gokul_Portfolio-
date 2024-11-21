import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://gokul-portfolio-backend.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional rewrite
      },
    },
  },
});
<<<<<<< HEAD

//https://gokul-portfolio-q5jqerma5-gokuls-projects-5ac84439.vercel.app
=======
>>>>>>> d2e3bbf1fc577b3e1147376e1f9981ebaa63a380
