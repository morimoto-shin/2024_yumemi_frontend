<template>
  <div class="checkbox-group-container">
    <div class="checkbox-group">
      <template v-for="pref in prefectureList" :key="pref.prefCode">
        <CheckBox
          class="checkbox"
          :model-value="pref.selected"
          :label="pref.prefName"
          @input="updateValue($event, pref.prefCode)"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import CheckBox from "@/components/atoms/CheckBox/index.vue";

  import type { Props, Emit } from "./index";
  import { useIndex } from "./index";
  defineProps<Props>();
  const emit = defineEmits<Emit>();
  const { updateValue } = useIndex(emit);
</script>

<style scoped lang="scss">
  .checkbox-group-container {
    max-width: 100%;
    padding: 20px;
  }
  .checkbox-group {
    display: grid;
    gap: 10px;

    @media (min-width: 600px) {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }

    @media (max-width: 599px) {
      grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
      gap: 5px;
    }
  }

  .checkbox {
    white-space: nowrap;
    // border: 1px solid $primary;
    background: rgba(0, 132, 255, 0.1);
    padding: 8px;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(0, 132, 255, 0.3);
    }

    @media (max-width: 599px) {
      padding: 5px;
      font-size: 12px;
    }
  }
</style>
