<template>
  <div class="profile-games"><slot></slot></div>
</template>

<style lang="scss">
  .profile-games {
    display: flex;
    overflow-x: auto;
    padding: 16px 0 24px;

    img {
      @include avatar(48px, 12px);
    }

    &__item {
      padding: 8px 16px;
      border-radius: 32px;

      background-color: unset;

      &.active {
        border-radius: 32px;
        background: $content-bg;
        box-shadow: $main-shadow;
      }
    }
  }
</style>