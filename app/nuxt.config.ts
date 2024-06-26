export default defineNuxtConfig({
  modules: ["@nuxt/eslint"],
  devtools: { enabled: true },
  ssr: false,
  imports: {
    dirs: ["store"],
  },
});
