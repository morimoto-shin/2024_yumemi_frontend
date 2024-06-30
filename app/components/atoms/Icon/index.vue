<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="viewBox"
    :fill="fill"
    :stroke="stroke"
    xmlns="http://www.w3.org/2000/svg"
    :aria-labelledby="name"
    role="img"
  >
    <title :id="name" lang="en">{{ name }} icon</title>
    <g :stroke-width="strokeWidth">
      <slot />
    </g>
  </svg>
</template>

<script setup lang="ts">
  type Props = {
    name: string;
    size?: number | string;
    viewBox?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number | string;
  };

  withDefaults(defineProps<Props>(), {
    size: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
  });
</script>
