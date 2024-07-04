<template>
  <div class="chart-wrapper">
    <highcharts ref="chart" class="chart" :options="chartOptions" />
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
  }
  .chart {
    height: 250px;
  }

  @media (min-width: 501px) {
    .chart {
      height: 350px;
    }
  }

  @media (min-width: 800px) {
    .chart {
      height: 400px;
    }
  }
</style>
