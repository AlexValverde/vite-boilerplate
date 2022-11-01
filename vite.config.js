import { resolve } from 'path';
import { defineConfig } from 'vite';

const external = [];

const globals = {};

export default defineConfig({
    build: {
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, './src/index.js'),
            name: 'myLib',
            fileName: 'index',
        },
        rollupOptions: {
            input: {
                index: resolve(__dirname, './src/index.js'),
            },
            external: external,
            output: [
                {
                    format: 'es',
                    entryFileNames: "[name].js",
                    globals: globals
                },
                {
                    format: 'es',
                    entryFileNames: "[name].mjs",
                    globals: globals
                },
                {
                    format: 'cjs',
                    entryFileNames: "[name].cjs",
                    globals: globals
                },
                {
                    format: 'umd',
                    entryFileNames: "[name].[format].cjs",
                    globals: globals
                }
            ]
        },
        minify: false,
        commonjsOptions: {
            sourceMap: false
        },
    }
});