import { resas } from "~/model/repository";
import type {
  Prefecture as PrefectureModel,
  Population,
} from "~/model/repository/resas";

export type Prefecture = PrefectureModel & { selected: boolean };
export type SelectedPopulationList = {
  name: string;
  population: Population;
};

const useIndex = () => {
  const prefectureList = ref<Prefecture[]>([]);
  const populationList = ref<Map<number, Population>>(new Map());
  const getPrefecture = async () => {
    try {
      const res = await resas.getPrefectures();
      if (!res) throw new Error();
      prefectureList.value = res.map((pref) => ({ ...pref, selected: false }));
    } catch {
      window.alert("都道府県の取得に失敗しました。リロードしてください。");
    }
  };
  const updatePrefectureSelect = async (value: boolean, prefCode: number) => {
    const index = prefectureList.value.findIndex(
      (pref) => pref.prefCode === prefCode,
    );
    if (value) {
      if (!populationList.value.has(prefCode)) {
        try {
          const res = await resas.getPopulation(prefCode);
          if (!res) throw new Error();
          populationList.value.set(prefCode, res);
        } catch {
          window.alert(`人口の取得に失敗しました。再度選択してください。`);
        }
      }
      prefectureList.value[index!] = {
        ...prefectureList.value![index!],
        selected: true,
      };
    } else {
      prefectureList.value[index!] = {
        ...prefectureList.value![index!],
        selected: false,
      };
    }
  };
  const selectedPopulationList = computed<SelectedPopulationList[]>(() =>
    (prefectureList.value || [])
      .filter(({ selected }) => selected)
      .map(({ prefCode, prefName }) => {
        const population = populationList.value.get(prefCode)!;
        return { name: prefName, population };
      }),
  );

  getPrefecture();

  return {
    prefectureList,
    populationList,
    selectedPopulationList,
    updatePrefectureSelect,
  };
};

export { useIndex };
