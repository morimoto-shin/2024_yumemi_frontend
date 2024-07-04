import type { Prefecture } from "~/components/templates/PopulationGraph";

type Props = {
  prefectureList: Prefecture[];
};

type Emit = {
  (e: "update-prefecture-select", value: boolean, prefCode: number): void;
};

const useIndex = (emit: Emit) => {
  const updateValue = (value: boolean, prefCode: number) => {
    emit("update-prefecture-select", value, prefCode);
  };
  return { updateValue };
};

export { useIndex, type Props, type Emit };
