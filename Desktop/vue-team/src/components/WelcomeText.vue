<template>
  <div class="welcome">
    <slot name="suptitle"></slot>
    <slot name="title"></slot>
  </div>
</template>

<style lang="scss" scoped>
  .welcome {
    font-weight: 400;

    &__suptitle {
      font-size: 12px;
      opacity: .5;
    }
    &__title {
      font-size: 24px;
    }
  }
</style>