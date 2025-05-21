// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-bootstrap-icons'],
  css: [
    '~/assets/css/main.css',
    'bootstrap-icons/font/bootstrap-icons.css'
  ],
  ssr: true,
  nitro: {
    preset : 'static'
  },
  app: {
    baseURL: '/mylinks/',
    buildAssetsDir: 'assets',
    head:{
      link:[
        { rel: 'icon', type: 'image/x-icon', href: '/mylinks/favicon.ico' },
      ],
    }
  }
})