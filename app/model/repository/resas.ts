import { type Resas, ResasImpl } from "~/model/api/resas";

export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export const populationTypeList = [
  "総人口",
  "年少人口",
  "生産年齢人口",
  "老年人口",
];
export type populationType = (typeof populationTypeList)[number];
export type PopulationData = { year: number; value: number }[];
export type Population = {
  [type in populationType]: PopulationData;
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
    const res = await this.resas.getPopulation(prefCode);
    if (!res) return null;
    const population = Object.fromEntries(
      res.data.map((population) => [
        population.label,
        population.data.map(({ year, value }) => ({ year, value })),
      ]),
    ) as Population;
    return population;
  }
}
