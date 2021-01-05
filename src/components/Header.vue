<template>
  <header class="header">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </header>
</template>

<style lang="scss">
  .header {
    @include pos-fixed(0, unset, $head-h);
    @include flexing(space-between);
    padding: $main-p;

    &__content {
      display: flex;
      align-items: center;
    }

    &__text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-right: 8px;
    }

    &__title {
      font-size: 14px;
      font-weight: 400;
    }

    &__subtitle {
      font-size: 12px;
      font-weight: 300;
      opacity: .5;
    }
  }
</style>