export default defineNuxtConfig({
  modules: ["@nuxt/eslint"],
  css: ["~/assets/scss/main.scss"],
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
  imports: {
    dirs: ["store"],
  },
});
