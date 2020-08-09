module.exports = {
  /*
  ** Headers of the page
  */
  modules: ['@nuxtjs/style-resources', 'bootstrap-vue/nuxt'],
  styleResources: {
    scss: ['~assets/style/color.scss'],
  },

  head: {
    title: 'AKA | Dental laboratory',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'AKA | Dental laboratory' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // {
      //   rel: 'stylesheet',
      //   href: '/assets/style/hamburgers.css'
      // }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    { src: '@fortawesome/fontawesome-svg-core/styles.css' },
    { src: '~/assets/style/hamburgers.css' },
    { src: 'swiper/css/swiper.css' }

  ],
  plugins: [
    '~/plugins/fontawesome.js',
    { src: '@/plugins/swiper.js', ssr: false },

  ]
}

