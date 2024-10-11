import { defineConfig } from 'astro/config'
import alpine from '@astrojs/alpinejs'

// https://astro.build/config
export default defineConfig({
    build: {
        format: 'file'
    },
    compressHTML: false,
    srcDir: './src/html',
    outDir: './dist',
    integrations: [alpine({ entrypoint: 'src/ts/dev.ts' })],
})
