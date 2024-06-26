import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  files: ["**/*.ts", "**/*.vue"],
  rules: {
    "no-console": "error",
    "vue/no-multiple-template-root": "error",
    "vue/require-v-for-key": "error",
    "vue/no-use-v-if-with-v-for": "error",
  },
});
