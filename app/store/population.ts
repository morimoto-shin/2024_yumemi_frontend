import { defineStore } from "pinia";
import type { Population } from "~/model/repository/resas";

export const usePopulationStore = defineStore("population", () => {
  const populationList = ref<Map<number, Population>>(new Map());

  const setPopulationList = (prefCode: number, list: Population) => {
    populationList.value.set(prefCode, list);
  };

  const hasPopulation = (prefCode: number) =>
    populationList.value.has(prefCode);

  const getPopulationListByPrefCode = (prefCode: number) => {
    return populationList.value.get(prefCode);
  };

  return {
    setPopulationList,
    hasPopulation,
    getPopulationListByPrefCode,
  };
});
