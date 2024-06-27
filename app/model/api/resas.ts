export type Prefecture = {
  prefCode: number;
  prefName: string;
};

type GetPrefecturesResult = {
  message: string | null;
  result: Prefecture[];
};

export type PopulationData = {
  year: number;
  value: number;
  rate: number;
};

type GetPopulationResult = {
  message: string | null;
  result: {
    boundaryYear: number;
    data: {
      label: string;
      data: PopulationData[];
    }[];
  };
};

export interface Resas {
  getPrefectures(): Promise<GetPrefecturesResult>;
  getPopulation(prefCode: number): Promise<GetPopulationResult>;
}

export class ResasImpl implements Resas {
  private readonly RESAS_API_KEY: string;
  private readonly RESAS_API_BASE_ENDPOINT: string;

  constructor() {
    const runtimeConfig = useRuntimeConfig();
    this.RESAS_API_KEY = runtimeConfig.public.resasApiKey;
    this.RESAS_API_BASE_ENDPOINT = runtimeConfig.public.resasApiBaseEndPoint;
  }

  async getPrefectures(): Promise<GetPrefecturesResult> {
    const { data } = await useFetch(
      `${this.RESAS_API_BASE_ENDPOINT}/api/v1/prefectures`,
      {
        headers: { "X-API-KEY": this.RESAS_API_KEY },
      },
    );
    return data.value as GetPrefecturesResult;
  }
  async getPopulation(prefCode: number): Promise<GetPopulationResult> {
    const { data } = await useFetch(
      `${this.RESAS_API_BASE_ENDPOINT}/api/v1/population/composition/perYear`,
      {
        params: { prefCode, cityCode: "-" },
        headers: { "X-API-KEY": this.RESAS_API_KEY },
      },
    );
    return data.value as GetPopulationResult;
  }
}
