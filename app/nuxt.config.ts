export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@pinia/nuxt"],
  plugins: ["@/plugins/highcharts"],
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
  devtools: { enabled: false },
  ssr: false,
  runtimeConfig: {
    public: {
      resasApiBaseEndPoint: process.env.RESAS_API_BASE_ENDPOINT,
      resasApiKey: process.env.RESAS_API_KEY,
    },
  },
  app: {
    baseURL: "/2024_yumemi_frontend/",
    buildAssetsDir: "/_nuxt/",
    cdnURL: "https://morimoto-shin.github.io/2024_yumemi_frontend/",
  },
});
