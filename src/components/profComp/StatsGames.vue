<template>
  <div class="stats-games">

    <Text16>Статистика по играм</Text16>
    <ProfileGames>
      <button class="profile-games__item active" type="button" data-tab="#tab_1">Game</button>
      <button class="profile-games__item" type="button" data-tab="#tab_2">Game</button>
      <button class="profile-games__item" type="button" data-tab="#tab_3">Game</button>
      <button class="profile-games__item" type="button" data-tab="#tab_4">Game</button>
      <button class="profile-games__item" type="button" data-tab="#tab_5">Game</button>
    </ProfileGames>

    <div class="stats-games__content active" id="tab_1">
      <div class="stats-games__text">526 часов</div>
      <div class="stats-games__text">80% Точность</div>
      <div class="stats-games__text">1.2 КД</div>
    </div>

  </div>
</template>

<script>
  import ProfileGames from '@/components/profComp/ProfileGames.vue'
  import Text16 from '@/components/text/Text16.vue'

  export default {
      components: {
          ProfileGames, Text16,
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
