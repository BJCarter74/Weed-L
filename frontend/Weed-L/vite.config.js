import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(
        "D:/ERA Projects/Weed-L/localhost+2-key.pem", // Corrected path
        "utf-8"
      ),
      cert: fs.readFileSync(
        "D:/ERA Projects/Weed-L/localhost+2.pem", // Corrected path
        "utf-8"
      ),
    },
  },
});
