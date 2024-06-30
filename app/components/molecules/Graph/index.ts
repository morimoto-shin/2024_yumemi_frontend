type ChartData = {
  name: string;
  data: { x: number; y: number }[];
};

type Props = {
  xAxisLabel: string;
  yAxisLabel: string;
  chartData: ChartData[];
};

const useIndex = (props: Props) => {
  const chartOptions = computed(() => {
    const series = props.chartData;

    return {
      chart: {
        type: "line",
      },
      title: {
        text: "",
      },
      xAxis: {
        title: {
          text: props.xAxisLabel,
        },
      },
      yAxis: {
        title: {
          text: props.yAxisLabel,
        },
      },
      series,
    };
  });

  return {
    chartOptions,
  };
};

export { useIndex, type Props };
