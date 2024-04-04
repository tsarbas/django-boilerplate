import * as esbuild from 'esbuild'

const mode = process.env.NODE_ENV || 'development'
const isDev = mode === 'development'
const isProd = mode === 'production'

if (isProd) {
    await esbuild.build({
        outdir: 'staticfiles/dist/js',
        entryPoints: [
            'staticfiles/src/js/app.js',
        ],
        bundle: true,
        minify: isProd,
        sourcemap: isDev,
    })
} else {
    let ctx = await esbuild.context({
        outdir: 'staticfiles/dist/js',
        entryPoints: [
            'staticfiles/src/js/app.js',
        ],
        bundle: true,
        minify: isProd,
        sourcemap: isDev,
    })

    ctx.watch()
}

