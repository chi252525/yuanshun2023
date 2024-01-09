console.log(process.env.NODE_ENV,"nuxt.config.js")

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '圓順風水室內設計｜台北室內設計｜台北空間規劃',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: '台北風水設計,風水室內設計,台北空間規劃,台北專業裝潢設計,住宅風水設計,台北室內裝修,台北北歐風設計,台北工業風設計,收納空間配置,收納空間設計,居家風水設計,工業風室內設計,北歐風室內設計,台北居家風水設計'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.js'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["bootstrap-vue/nuxt"],
  bootstrapVue: {
    icons: true,
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // 圖片轉成base64
    loaders: {
      imgUrl: {
        limit: 1000
      }
    },
    // 後處理器
    // postcss:{preset:{
    //   autoprefixer:{
    //     browsers:["last 1 versions"]
    //   }
    // }},
    extractCSS: true
  }
}
