type Prefecture = {
  prefCode: number;
  prefName: string;
};

type ResasGetPrefecturesResult = {
  message: string | null;
  result: Prefecture[];
};

type Population = {
  year: number;
  value: number;
  rate: number;
};

type ResasGetPopulationResult = {
  message: string | null;
  result: {
    boundaryYear: number;
    data: {
      label: string;
      data: Population[];
    }[];
  };
};

const apiBaseEndPoint = "https://opendata.resas-portal.go.jp";

export interface Resas {
  getPrefectures(): Promise<ResasGetPrefecturesResult>;
  getPopulation(prefCode: string): Promise<ResasGetPopulationResult>;
}

export class ResasImpl implements Resas {
  async getPrefectures(): Promise<ResasGetPrefecturesResult> {
    const { data } = await useFetch(
      apiBaseEndPoint + "api/v1/population/composition/perYear",
    );
    return data.value as ResasGetPrefecturesResult;
  }
  async getPopulation(prefCode: string): Promise<ResasGetPopulationResult> {
    const { data } = await useFetch(apiBaseEndPoint + "/api/v1/prefectures", {
      query: { prefCode },
    });
    return data.value as ResasGetPopulationResult;
  }
}
