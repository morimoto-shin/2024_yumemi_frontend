import {
  type Resas,
  ResasImpl,
  type Prefecture,
  type PopulationData,
} from "~/model/api/resas";

type Population = {
  boundaryYear: number;
  data: {
    label: string;
    data: PopulationData[];
  }[];
};

export interface ResasRepository {
  getPrefectures(): Promise<Prefecture[]>;
  getPopulation(prefCode: number): Promise<Population>;
}

export class ResasRepositoryImpl implements ResasRepository {
  private readonly resas: Resas;

  constructor() {
    this.resas = new ResasImpl();
  }

  async getPrefectures(): Promise<Prefecture[]> {
    const { result } = await this.resas.getPrefectures();
    return result;
  }

  async getPopulation(prefCode: number): Promise<Population> {
    const { result } = await this.resas.getPopulation(prefCode);
    return result;
  }
}
