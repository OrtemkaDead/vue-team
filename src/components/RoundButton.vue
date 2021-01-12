<template>
  <button class="circle-btn">
    <slot></slot>
  </button>
</template>

<style lang="scss">
  .circle-btn {
    @include flexing(center);
    width: 40px;
    height: 40px;

    border-radius: 50%;
    background: $content-bg;
    box-shadow: $main-shadow;
  }

  .icon {
    fill: #fff;
  }
</style>