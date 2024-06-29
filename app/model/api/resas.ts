type GetPrefecturesResult = {
  message: string | null;
  result: { prefCode: number; prefName: string }[];
};

type GetPopulationResult = {
  message: string | null;
  result: {
    boundaryYear: number;
    data: {
      label: string;
      data: {
        year: number;
        value: number;
        rate: number;
      }[];
    }[];
  };
};

type ResasResponseError =
  | string
  | {
      statusCode?: string;
      message: string;
      description?: string;
    };

export interface Resas {
  getPrefectures(): Promise<GetPrefecturesResult["result"] | null>;
  getPopulation(
    prefCode: number,
  ): Promise<GetPopulationResult["result"] | null>;
}

export class ResasImpl implements Resas {
  private readonly RESAS_API_KEY: string;
  private readonly RESAS_API_BASE_ENDPOINT: string;

  constructor() {
    const runtimeConfig = useRuntimeConfig();
    this.RESAS_API_KEY = runtimeConfig.public.resasApiKey;
    this.RESAS_API_BASE_ENDPOINT = runtimeConfig.public.resasApiBaseEndPoint;
  }

  async getPrefectures(): Promise<GetPrefecturesResult["result"] | null> {
    const attemptGetPrefectures = async (
      retries: number,
      delay: number,
    ): Promise<GetPrefecturesResult["result"] | null> => {
      const { data } = await useFetch<
        GetPrefecturesResult | ResasResponseError
      >(`${this.RESAS_API_BASE_ENDPOINT}/api/v1/prefectures`, {
        headers: { "X-API-KEY": this.RESAS_API_KEY },
      });
      if (typeof data.value === "string") return null;
      else if (data.value?.message) return null;
      else if (
        data.value &&
        Object.keys(data.value).length == 1 &&
        data.value?.message === "" &&
        retries > 0
      ) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        return attemptGetPrefectures(retries - 1, delay);
      }
      return (data.value as GetPrefecturesResult).result;
    };
    return attemptGetPrefectures(3, 500);
  }

  async getPopulation(
    prefCode: number,
  ): Promise<GetPopulationResult["result"] | null> {
    const attemptGetPopulation = async (
      retries: number,
      delay: number,
    ): Promise<GetPopulationResult["result"] | null> => {
      const { data } = await useFetch<GetPopulationResult | ResasResponseError>(
        `${this.RESAS_API_BASE_ENDPOINT}/api/v1/population/composition/perYear`,
        {
          params: { prefCode, cityCode: "-" },
          headers: { "X-API-KEY": this.RESAS_API_KEY },
        },
      );
      if (typeof data.value === "string") {
        return null;
      } else if (data.value?.message) {
        return null;
      } else if (
        data.value &&
        Object.keys(data.value).length == 1 &&
        retries > 0
      ) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        return attemptGetPopulation(retries - 1, delay);
      }
      return (data.value as GetPopulationResult).result;
    };

    return attemptGetPopulation(3, 500);
  }
}
