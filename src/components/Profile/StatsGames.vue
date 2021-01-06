<template>
  <div class="stats-games">

    <TextMedium>Статистика по играм</TextMedium>
    <HorizontalList>
      <button class="profile-games__item active" type="button" data-tab="#tab_1">Game</button>
      <button class="profile-games__item" type="button" data-tab="#tab_2">Game</button>
      <button class="profile-games__item" type="button" data-tab="#tab_3">Game</button>
      <button class="profile-games__item" type="button" data-tab="#tab_4">Game</button>
      <button class="profile-games__item" type="button" data-tab="#tab_5">Game</button>
    </HorizontalList>

    <div class="stats-games__content active" id="tab_1">
      <div class="stats-games__text">526 часов</div>
      <div class="stats-games__text">80% Точность</div>
      <div class="stats-games__text">1.2 КД</div>
    </div>

  </div>
</template>

<script>
  import HorizontalList from '@/components/HorizontalList.vue'
  import TextMedium from '@/components/text/TextMedium.vue'

  export default {
      components: {
          HorizontalList, TextMedium,
      }
  }
</script>

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
