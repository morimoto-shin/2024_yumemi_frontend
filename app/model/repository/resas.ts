import { type Resas, ResasImpl } from "~/model/api/resas";

export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PopulationData = {
  year: number;
  value: number;
  rate: number;
};

export type Population = {
  boundaryYear: number;
  data: {
    label: string;
    data: PopulationData[];
  }[];
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
    return res;
  }
}
