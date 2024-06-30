<template>
  <h1 class="title">{{ displayText }}</h1>
</template>
<script setup lang="ts">
  defineProps<{
    displayText: string;
  }>();
</script>
<style lang="scss" scoped>
  .title {
    font-size: 32px;
    font-weight: bold;
  }
</style>
