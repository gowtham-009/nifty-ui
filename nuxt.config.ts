// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title:'ui',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link:[{rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css", integrity:"sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==", crossorigin:"anonymous",referrerpolicy:"no-referrer"},]
    }
  },

  modules: [
    '@nuxtjs/tailwindcss'
  ],
  plugins: ["~/plugins/preline.client.ts"],
  css:['~/assets/css/style.css']
})
