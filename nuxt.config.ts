// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['auth-dev'],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
