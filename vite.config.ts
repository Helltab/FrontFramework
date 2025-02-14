import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/admin',
    build: {
        outDir: './dist/admin',
    },
    server: {
        proxy: {
            // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
                '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },

        },
    },
    plugins: [
        vue(),
        vueJsx(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            'monaco-editor': 'monaco-editor/esm/vs/editor/editor.api.js'
        },
        // ignore suffix
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },

})
