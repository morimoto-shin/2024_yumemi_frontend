export default defineNuxtPlugin(async (nuxtApp) => {
  const Highcharts = await import("highcharts");
  const HighchartsVue = await import("highcharts-vue");
  nuxtApp.vueApp.use(HighchartsVue.default, {
    highcharts: Highcharts.default,
  });
});
