<template>
  <div class="checkbox">
    <input
      :id="label"
      type="checkbox"
      :checked="modelValue"
      @input="updateValue($event)"
    >
    <label class="checkbox-label" :for="label">{{ label }}</label>
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
<style lang="scss" scoped>
  .checkbox-label {
    margin-left: 5px;
  }
</style>
