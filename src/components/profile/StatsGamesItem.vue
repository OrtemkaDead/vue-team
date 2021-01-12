<template>
  <button class="profile-games__item">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
  .profile-games__item {
    padding: 8px 16px;
    border-radius: 32px;

    background-color: unset;

    &.active {
      border-radius: 32px;
      background: $content-bg;
      box-shadow: $main-shadow;
    }
  }
</style>