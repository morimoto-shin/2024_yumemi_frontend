<template>
  <div class="chart-wrapper">
    <highcharts ref="chart" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
  import type { Props } from "./index";
  import { useIndex } from "./index";
  const props = defineProps<Props>();
  const { chartOptions } = useIndex(props);
</script>

<style lang="scss">
  .chart-wrapper {
    width: 100%;
    height: 400px;
  }
</style>
