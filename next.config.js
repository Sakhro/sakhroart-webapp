const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript')
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
  exportPathMap: async () => ({
    '/': { page: '/' },
    '/bags': { page: '/bags' },
    '/history': { page: '/history' },
    '/bag/asteria': { page: '/bag', query: { slug: 'asteria' } },
    '/bag/agata': { page: '/bag', query: { slug: 'agata' } },
    '/bag/avrora': { page: '/bag', query: { slug: 'avrora' } },
    '/bag/besaga': { page: '/bag', query: { slug: 'besaga' } },
    '/bag/besagaRed': { page: '/bag', query: { slug: 'besagaRed' } },
    '/bag/dayNight': { page: '/bag', query: { slug: 'dayNight' } },
    '/bag/diana': { page: '/bag', query: { slug: 'diana' } },
    '/bag/eileithyia': { page: '/bag', query: { slug: 'eileithyia' } },
    '/bag/eos': { page: '/bag', query: { slug: 'eos' } },
    '/bag/fish': { page: '/bag', query: { slug: 'fish' } },
    '/bag/harmony': { page: '/bag', query: { slug: 'harmony' } },
    '/bag/hubris': { page: '/bag', query: { slug: 'hubris' } },
    '/bag/iris': { page: '/bag', query: { slug: 'iris' } },
    '/bag/juno': { page: '/bag', query: { slug: 'juno' } },
    '/bag/juventas': { page: '/bag', query: { slug: 'juventas' } },
    '/bag/kandinsky': { page: '/bag', query: { slug: 'kandinsky' } },
    '/bag/malva': { page: '/bag', query: { slug: 'malva' } },
    '/bag/martricaria': { page: '/bag', query: { slug: 'martricaria' } },
    '/bag/papaver': { page: '/bag', query: { slug: 'papaver' } },
    '/bag/reya': { page: '/bag', query: { slug: 'reya' } },
    '/bag/sophia': { page: '/bag', query: { slug: 'sophia' } },
  })
}

module.exports = withPlugins([
  [withTypescript],
  [withOptimizedImages, {
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
    svgo: {},
    webp: {
      preset: 'default',
      quality: 75,
    },
  }],
  [withCss],
  [withSass, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
  }],
], nextConfig)
