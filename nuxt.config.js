
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
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes:'16x16', href: '/images/swiss-staking-logo.png' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" },
      { rel: "stylesheet", href: "/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/css/animate.css" },
      { rel: "stylesheet", href: "/plugins/nonid-icon/style.css" },
      { rel: "stylesheet", href: "/css/style.css" },
      { rel: "stylesheet", href: "/css/responsive.css" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FF8257', height: '4px' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
     '~plugins/vue-simple-alert.js', 
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    //'@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  server: {
    port: 8080 // default: 3000
  }
}
