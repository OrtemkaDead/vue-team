<template>
  <div class="title"><slot></slot></div>
</template>

<style lang="scss" scoped>
  .title {
    font-size: 24px;

    background: linear-gradient(to right, #9d50bb, #6e48aa);
    background-size: 200% 200%;
    animation: gradient 10s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>