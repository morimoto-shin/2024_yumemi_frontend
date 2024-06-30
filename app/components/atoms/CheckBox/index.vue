<template>
  <div class="checkbox">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="updateValue($event)"
    >
    <label for="checkbox">{{ label }}</label>
  </div>
</template>
<script setup lang="ts">
  import type { Emit } from "./index";
  import { useIndex } from "./index";
  defineProps<{
    label: string;
    modelValue: boolean;
  }>();
  const emit = defineEmits<Emit>();
  const { updateValue } = useIndex(emit);
</script>
<style lang="scss" scoped></style>
