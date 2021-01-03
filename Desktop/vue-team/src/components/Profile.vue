<template>
  <div class="profile">
    <Header>
      <div class="title">ID6566777</div>
      <img class="avatar" src="@/assets/img/avatar.png" alt="">
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

      <div class="preferred-games">
        <div class="preferred-games__title">Предпочитаемые игры</div>
        <div class="profile-games">

          <img src="@/assets/img/avatar.png" alt="">
          <img src="@/assets/img/avatar.png" alt="">
          <img src="@/assets/img/avatar.png" alt="">
          <img src="@/assets/img/avatar.png" alt="">
          <img src="@/assets/img/avatar.png" alt="">
          <img src="@/assets/img/avatar.png" alt="">
          <img src="@/assets/img/avatar.png" alt="">
          <img src="@/assets/img/avatar.png" alt="">

        </div>
      </div>

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

    <Nav>
      <router-link to="/home">
        <svg class="icon">
          <use xlink:href='#icon-homepage'></use>
        </svg>
      </router-link>
      <router-link to="/dialogs">
        <svg class="icon">
          <use xlink:href='#icon-message'></use>
        </svg>
      </router-link>
      <router-link to="/profile">
        <svg class="icon active">
          <use xlink:href='#icon-profile'></use>
        </svg>
      </router-link>
    </Nav>
  </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Nav from '@/components/Nav.vue'

    export default {
        components: {
            Header, Nav,
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