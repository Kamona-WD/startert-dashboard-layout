import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    build: {
        format: 'file'
    },
    compressHTML: false,
    srcDir: './src/html',
})
