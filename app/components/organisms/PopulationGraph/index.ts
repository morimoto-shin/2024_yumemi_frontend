import { populationTypeList } from "~/model/repository/resas";
import type { populationType } from "~/model/repository/resas";
import type { SelectedPopulationList } from "~/components/templates/PopulationGraph";

type Props = {
  selectedPopulationList: SelectedPopulationList[];
};

const useIndex = (props: Props) => {
  const selectedPopulationType = ref<populationType>(populationTypeList[0]);
  const graphProps = computed(() => {
    return {
      xAxisLabel: "年",
      yAxisLabel: selectedPopulationType.value,
      data: (props.selectedPopulationList || []).map((item) => ({
        name: item.name,
        data: item.population[selectedPopulationType.value].map(
          ({ year, value }) => ({ x: year, y: value }),
        ),
      })),
    };
  });
  return { selectedPopulationType, graphProps };
};

export { populationTypeList, useIndex, type Props };
