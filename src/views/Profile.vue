<template>
  <div class="profile">
    <Header>
      <template v-slot:left>
        <div class="title">ID6566777</div>
      </template>
      <template v-slot:right>
        <img class="avatar" src="@/assets/img/avatar.png" alt="">
      </template>
    </Header>

    <div class="content">

      <div class="profile-info">
        <img class="profile-info__avatar" src="@/assets/img/avatar.png" alt="">
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

    export default {
        components: {
            Header, PreferredGames,
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

    &__avatar {
      @include avatar(56px, 16px)
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