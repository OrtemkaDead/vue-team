<template>
  <div class="profile">
    <Header>
      <template v-slot:left>
        <Title>ID6566777</Title>
      </template>
      <template v-slot:right>
        <Avatar36></Avatar36>
      </template>
    </Header>

    <div class="content">

      <div class="profile-info">
        <Avatar56></Avatar56>
        <div class="profile-info__text">
          <div class="profile-info__name">Имя пользователя</div>
          <div class="profile-info__status">Статус пользователя</div>
        </div>
      </div>

      <button class="profile-btn"><a href="#">Редактировать</a></button>

      <PreferredGames></PreferredGames>

      <div class="stats-games">
        <div class="stats-games__title">Статистика по играм</div>
        <div class="profile-games">

          <button class="profile-games__item active" type="button" data-tab="#tab_1">Game</button>
          <button class="profile-games__item" type="button" data-tab="#tab_2">Game</button>
          <button class="profile-games__item" type="button" data-tab="#tab_3">Game</button>
          <button class="profile-games__item" type="button" data-tab="#tab_4">Game</button>
          <button class="profile-games__item" type="button" data-tab="#tab_5">Game</button>

        </div>

        <div class="stats-games__content active" id="tab_1">
          <div class="stats-games__text">526 часов</div>
          <div class="stats-games__text">80% Точность</div>
          <div class="stats-games__text">1.2 КД</div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import PreferredGames from '@/components/PreferredGames.vue'
    import Title from '@/components/Title.vue'
    import Avatar36 from '@/components/Avatar36.vue'
    import Avatar56 from '@/components/Avatar56.vue'

    export default {
        components: {
            Header, PreferredGames, Avatar36, Avatar56, Title,
        }
    }
</script>

<style lang="scss" scoped>
  .content {
    @include pos-fixed($head-h, $nav-h, unset);
    overflow-y: auto;
    margin: 0 $main-p;
  }

  .profile-info {
    @include flexing(unset);

    &__text {
      margin-left: 16px;
    }

    &__name {
      font-size: 18px;
    }

    &__status {
      font-size: 12px;
      font-weight: 300;
      opacity: .5;
    }

  }

  .profile-btn {
    width: 100%;
    padding: 12px 0;
    margin: 16px 0 24px;

    border-radius: 8px;
    background: $content-bg;
    box-shadow: $main-shadow;
  }

  .profile-games {
    display: flex;
    overflow-x: auto;
    padding: 16px 0 24px;


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