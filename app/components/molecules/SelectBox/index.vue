<template>
  <div class="select-wrapper" :style="{ width: width }">
    <div class="select-container" @click="toggleDropdown">
      <div>{{ props.modelValue }}</div>
      <Icon v-if="isOpen" name="arrow-up">
        <path d="M7 14l5-5 5 5" />
      </Icon>
      <Icon v-else name="arrow-down">
        <path d="M7 10l5 5 5-5" />
      </Icon>
    </div>
    <ul v-if="isOpen" class="select-dropdown" :style="{ width: width }">
      <li
        v-for="(item, index) in items"
        :key="index"
        @click="updateValue(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import Icon from "@/components/atoms/Icon/index.vue";
  import { useIndex } from "./index";
  import { type Emit, type Props } from "./index";

  const props = withDefaults(defineProps<Props>(), {
    width: "200px",
  });
  const emit = defineEmits<Emit>();

  const { isOpen, toggleDropdown, updateValue } = useIndex(props, emit);
</script>

<style lang="scss" scoped>
  .select-wrapper {
    position: relative;
  }

  .select-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    border: 2px solid $primary;
    cursor: pointer;
    background-color: #fff;
    transition: all 0.3s ease;

    &:hover {
      background-color: #e6f5ff;
    }
  }

  .select-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border: 1px solid $primary;
    box-shadow: 0 2px 4px rgba(0, 132, 255, 0.1);
    list-style: none;
    padding: 0;
    margin: 4px 0 0;
    z-index: 10;
  }

  .select-dropdown li {
    padding: 8px 12px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(0, 132, 255, 0.1);
    }
  }

  :deep(svg) {
    width: 20px;
    height: 20px;
    stroke: $primary;
  }
</style>
