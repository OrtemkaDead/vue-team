<template>
  <div class="horizontal-list"><slot></slot></div>
</template>

<style lang="scss">
  .horizontal-list {
    display: flex;
    overflow-x: auto;
    padding: 16px 0 24px;

    img {
      @include avatar(48px, 12px);
    }
  }
</style>