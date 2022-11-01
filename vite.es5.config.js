
import { resolve } from 'path'
import { defineConfig } from 'vite'

const globals = { };

export default defineConfig({
    build: {
        outDir: 'dist/iife',
        lib: {
            entry: resolve(__dirname, './src/index.js'),
            name: 'myLibName',
            fileName: 'index',
        },
        rollupOptions: {
            input: {
                index: resolve(__dirname, './src/index.js'),
            },
            output: [
                {
                    format: 'iife',
                    entryFileNames: "[name].[format].js",
                    globals: globals
                }
            ]
        },
        commonjsOptions: {
            sourceMap: false
        },
        minify: false,
        target: 'es2015'
    }
});