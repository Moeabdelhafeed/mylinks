// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-bootstrap-icons'],
  css: [
    '~/assets/css/main.css',
    'bootstrap-icons/font/bootstrap-icons.css'
  ],
  app: {
    baseURL: '/{YOUR GITHUB REPO NAME}/',
    buildAssetsDir: 'assets',
    head:{
      link:[
        { rel: 'icon', type: 'image/x-icon', href: '/{YOUR GITHUB REPO NAME}/favicon.ico' },
      ],
    }
  }
})