// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@sidebase/nuxt-auth',
    '@nuxt/content'
  ],

   css: ['~/assets/css/main.css'],

  
  runtimeConfig: {
    // Private keys (only available on server-side)
    authSecret: process.env.NUXT_AUTH_SECRET,
    databaseUrl: process.env.DATABASE_URL,
    
    // Public keys (exposed to client-side)
    public: {
      authUrl: process.env.NUXT_AUTH_URL || 'http://localhost:3000',
      algoliaAppId: process.env.NUXT_PUBLIC_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.NUXT_PUBLIC_ALGOLIA_SEARCH_KEY,
    }
  },

  // Performance optimizations
  nitro: {
    compressPublicAssets: true,
  },

  // SEO and meta
  app: {
    head: {
      title: 'Gujarat Coaching Discovery Platform',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Find the best coaching centers in Gujarat' }
      ]
    }
  }
})