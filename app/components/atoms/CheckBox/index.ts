type Emit = {
  (e: "update:modelValue", value: boolean): void;
};

const useIndex = (emit: Emit) => {
  const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit("update:modelValue", target.checked);
  };
  return {
    updateValue,
  };
};

export { useIndex, type Emit };
