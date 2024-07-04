<template>
  <div class="header">
    <img src="@/assets/icon/kkrn_icon_graph_5.svg" class="header_icon">
    <h1 class="header_text">都道府県別人口推移</h1>
  </div>
</template>
<script setup></script>

<style scoped lang="scss">
  .header {
    display: flex;
    margin: 0px;
    padding: 10px;
    width: 100%;
    color: #0b3d7a;
    &_text {
      font-size: 24px;
    }
    &_icon {
      margin-left: 20px;
      width: 32px;
      height: 32px;
    }
  }
</style>
