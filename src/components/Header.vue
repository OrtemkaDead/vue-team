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

    .title {
      font-size: 24px;

      background: linear-gradient(to right, #9d50bb, #6e48aa);
      background-size: 200% 200%;
      animation: gradient 10s ease infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .avatar {
      @include avatar(36px);
    }

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

    &__back-arr {
      display: block;
      width: 18px;
      height: 2px;
      position: relative;

      background: #fff;

      & span:before {
        @include pseudo;
        width: 10px;
        height: 2px;
        transform: rotate(-45deg);
        transform-origin: left bottom;
        background: #fff;
      }

      & span:after {
        @include pseudo;
        width: 10px;
        height: 2px;
        transform: rotate(45deg);
        transform-origin: left top;
        background: #fff;
      }
    }
  }
</style>