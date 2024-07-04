type Emit = {
  (e: "input", value: boolean): void;
};

const useIndex = (emit: Emit) => {
  const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit("input", target.checked);
  };
  return {
    updateValue,
  };
};

export { useIndex, type Emit };
