<template>
  <div class="container">
    <div class="population_graph">
      <PopulationGraph :selected-population-list="selectedPopulationList" />
    </div>
    <div class="checkbox_prefecture">
      <CheckBoxPrefectureGroup
        :prefecture-list="prefectureList"
        @update-prefecture-select="updatePrefectureSelect"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import PopulationGraph from "@/components/organisms/PopulationGraph/index.vue";
  import CheckBoxPrefectureGroup from "@/components/organisms/CheckBoxPrefectureGroup/index.vue";
  import { useIndex } from "./index";
  const { prefectureList, selectedPopulationList, updatePrefectureSelect } =
    useIndex();
</script>

<style scoped lang="scss">
  .container {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
  @media (min-width: 801px) {
    .checkbox_prefecture {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    .population_graph {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
  }
  @media (max-width: 800px) {
    .container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
    }
    .population_graph {
      grid-row: 1 / 2;
    }
    .checkbox_prefecture {
      grid-row: 2 / 3;
    }
  }
</style>
