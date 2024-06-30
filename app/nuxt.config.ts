export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@pinia/nuxt"],
  css: ["~/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss";',
        },
      },
    },
  },
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    public: {
      resasApiBaseEndPoint: process.env.RESAS_API_BASE_ENDPOINT,
      resasApiKey: process.env.RESAS_API_KEY,
    },
  },
});
