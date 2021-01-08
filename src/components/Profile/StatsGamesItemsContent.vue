<template>
  <div>

    <div class="stats-games__content active">
      <div class="stats-games__text">526 часов</div>
      <div class="stats-games__text">80% Точность</div>
      <div class="stats-games__text">1.2 КД</div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  .stats-games {
    &__content {
      display: none;

      &.active {
        display: block;
      }
    }

    &__text {
      font-weight: 400;
      margin-bottom: 12px;
    }
  }
</style>