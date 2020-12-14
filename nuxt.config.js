export default {
  target: 'static',

  head: {
    title: 'Photo Message',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: "preconnect", href: "https://fonts.gstatic.com" },      
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto+Condensed:wght@300;400&display=swap" },      
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css', integrity: 'sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2', crossorigin: 'anonymous' },
      { rel: 'icon', type: "image/x-icon", href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css' }
    ],
    script: [
      { src: 'https://unpkg.com/localbase/dist/localbase.dev.js' },
      // { src: 'https://cdn.socket.io/socket.io-3.0.1.min.js' },
    ]
  },

  loading: {
    color: '#278f61',
    height: '4px',
    duration: 3000
  },

  css: [
    '~assets/css/style.css'
  ],

  components: true,

  plugins: [
    {
      src: '~plugins/vue-toastr',
      mode: 'client'
    },
    {
      src: '~plugins/vue-hammer',
      mode: 'client'
    },
    {
      src: '~plugins/vue-panzoom',
      mode: 'client'
    },
    {
      src: '~plugins/vue-zoomer',
      mode: 'client'
    }
  ],

  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  pwa: {
    manifest: {
      name: 'Photo Message',
      short_name: 'Photo Message',
      display: 'fullscreen',
      orientation: 'portrait'
    }
  },

  buildModules: [
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: ['faCamera']
    }
  }
}
