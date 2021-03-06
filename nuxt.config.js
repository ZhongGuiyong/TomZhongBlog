const BASE_URL = process.env.DEPLOY_ENV === 'GH_PAGES' ? `/` : '/'
const webpack = require('webpack')
// console.log(process.env)
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'JQOy-nnXP5wYJvQ8eP9x_Oo76yQ5MePAkrcC8sFgK1k' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: process.env.npm_package_name || ''
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: process.env.npm_package_name || ''
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#8490ff' },
  /*
   ** Global CSS
   */
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/fontawesome.js' },
    { src: '~/plugins/eventBus.js' },
    { src: '@/plugins/mixin.js' },
    { src: '~/plugins/vue-tags-input', ssr: false },
    { src: '~/plugins/upload', ssr: false },
    { src: '~/plugins/pageConfig.js' },
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics: {
    id: 'UA-144190246-1',
    debug: {
      enabled: true,
      sendHitTask: true
    },
  },
  styleResources: {
    less: './assets/**/*.less',
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          BASE_URL: JSON.stringify(BASE_URL),
          NUXT_PORT: process.env.NUXT_PORT,
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        }
      })
    ]
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  }
}
