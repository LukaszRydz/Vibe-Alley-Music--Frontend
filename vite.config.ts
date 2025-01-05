import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { ViteMinifyPlugin } from "vite-plugin-minify";

export default defineConfig({
    plugins: [react(), ViteMinifyPlugin({})],
    server: {
        host: "0.0.0.0",
        port: 5173,
    },
    // base: "/Vibe-Alley-Music--Frontend/",
    build: {
        minify: "terser",
        cssMinify: "lightningcss",
        terserOptions: {
            compress: {
                drop_console: true,
            },
        },
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return id.toString().split("node_modules/")[1].split("/")[0].toString();
                    }
                },
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
            },
        },
    },
});
