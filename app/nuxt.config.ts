export default defineNuxtConfig({
  modules: ["@nuxt/eslint"],
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
      resasApiKey: process.env.RESAS_API_KEY,
    },
  },
});
