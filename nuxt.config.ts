export default defineNuxtConfig({
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false
      }
    ]
  },
  css: [
    '@/assets/css/global.css'
  ],
  modules: [
    'nuxt-simple-sitemap',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.js',
    injectPosition: 0,
    viewer: false,
    exposeConfig: true
  },
  sitemap: {
    hostname: 'https://formkit.appeel.io'
  }
})
