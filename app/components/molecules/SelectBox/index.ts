type Props = {
  width?: string;
  items: string[];
  modelValue: string;
};

type Emit = {
  (e: "update:modelValue", value: string): void;
};

const useIndex = (props: Props, emit: Emit) => {
  const isOpen = ref(false);

  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };

  const updateValue = (value: string) => {
    emit("update:modelValue", value);
    isOpen.value = false;
  };

  return {
    isOpen,
    toggleDropdown,
    updateValue,
  };
};

export { useIndex, type Props, type Emit };
