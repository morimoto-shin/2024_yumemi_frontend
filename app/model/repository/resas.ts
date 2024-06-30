import { type Resas, ResasImpl } from "~/model/api/resas";
import { usePopulationStore } from "~/store/population";

export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export const populationType = {
  total: "総人口",
  yang: "年少人口",
  workingAge: "生産年齢人口",
  elderly: "老年人口",
};

export type PopulationData = { year: number; value: number }[];
export type Population = {
  [type in keyof typeof populationType]: PopulationData;
};

export interface ResasRepository {
  getPrefectures(): Promise<Prefecture[] | null>;
  getPopulation(prefCode: number): Promise<Population | null>;
}

export class ResasRepositoryImpl implements ResasRepository {
  private readonly resas: Resas;
  constructor() {
    this.resas = new ResasImpl();
  }

  async getPrefectures(): Promise<Prefecture[] | null> {
    const res = await this.resas.getPrefectures();
    return res;
  }

  async getPopulation(prefCode: number): Promise<Population | null> {
    const populationStore = usePopulationStore();
    if (populationStore.hasPopulation(prefCode)) {
      return populationStore.getPopulationListByPrefCode(prefCode)!;
    } else {
      const res = await this.resas.getPopulation(prefCode);
      if (!res) return null;
      const population = Object.fromEntries(
        res.data.map((population) => [
          population.label,
          population.data.map(({ year, value }) => ({ year, value })),
        ]),
      ) as Population;
      populationStore.setPopulationList(prefCode, population);
      return population;
    }
  }
}
