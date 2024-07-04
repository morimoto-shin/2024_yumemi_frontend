<template>
  <div>
    <Header />
    <slot />
  </div>
</template>
<script setup>
  import Header from "@/components/molecules/Header/index.vue";
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
</style>
