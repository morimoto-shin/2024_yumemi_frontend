export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint'
  ],
  eslint: {
  },
  devtools: { enabled: true },
  ssr: false,
  imports: {
    dirs: ["store"],
  },
});
