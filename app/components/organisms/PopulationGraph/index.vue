<template>
  <div class="population-graph-container">
    <div class="population-graph-select-box">
      <SelectBox
        v-model="selectedPopulationType"
        width="100%"
        :items="populationTypeList"
      />
    </div>
    <div>
      <div v-if="selectedPopulationList.length">
        <Graph
          :x-axis-label="graphProps.xAxisLabel"
          :y-axis-label="graphProps.yAxisLabel"
          :chart-data="graphProps.data"
        />
      </div>
      <div v-else class="population-graph-no-data">
        <p>都道府県を選択してください</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import SelectBox from "@/components/molecules/SelectBox/index.vue";
  import Graph from "@/components/molecules/Graph/index.vue";
  import { useIndex, populationTypeList } from ".";
  import type { Props } from ".";
  const props = defineProps<Props>();
  const { selectedPopulationType, graphProps } = useIndex(props);
</script>

<style scoped lang="scss">
  .population-graph-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding: 20px;
  }
  .population-graph-select-box {
    margin-bottom: 20px;
  }

  .population-graph-no-data {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 250px;
    border: 2px solid $primary;
    border-radius: 10px;
    color: $primary;
    background-color: rgba(0, 132, 255, 0.1);
  }

  @media (min-width: 501px) {
    .population-graph-no-data {
      height: 350px;
    }
  }

  @media (min-width: 800px) {
    .population-graph-no-data {
      height: 400px;
    }
  }
</style>
