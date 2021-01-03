<template>
  <div class="home">
    <Header>
      <img class="title" src="@/assets/img/like-icon.svg" alt="">
      <img class="avatar" src="@/assets/img/avatar.png" alt="">
    </Header>

    <div class="content">
      <div class="welcome">
        <div class="welcome__text">Привет, Пользователь!</div>
        <div class="welcome__big-text">Время оценивать</div>
      </div>

      <div class="gamers">

        <div class="account-gamers">
          <img class="account-gamers__avatar" src="@/assets/img/user-img.jpg" alt="">
          <div class="account-gamers__text">
            <div class="account-gamers__name">Артес</div>
            <div class="account-gamers__games">WoW</div>
          </div>
        </div>

        <div class="gamers-info">
          <div class="gamers-info__text">526 часов</div>
          <div class="gamers-info__text">80% точность</div>
          <div class="gamers-info__text">1.2 КД</div>
          <div class="gamers-info__text">Дискорд есть</div>

        </div>

      </div>

      <div class="buttons">
        <button><img src="@/assets/img/close-icon.svg" alt=""></button>
        <button class="btn-big"><img src="@/assets/img/gamepad-icon.svg" alt=""></button>
        <button><img src="@/assets/img/like-icon.svg" alt=""></button>
      </div>
    </div>

    <Nav>
      <router-link to="/home">
        <svg class="icon active">
          <use xlink:href='#icon-homepage'></use>
        </svg>
      </router-link>
      <router-link to="/dialogs">
        <svg class="icon">
          <use xlink:href='#icon-message'></use>
        </svg>
      </router-link>
      <router-link to="/profile">
        <svg class="icon">
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
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    //Решение проблемы с тенью
    margin: unset;
    padding: 0 $main-p;
  }

  .welcome {
    font-weight: 400;

    &__text {
      font-size: 12px;
      opacity: .5;
    }
    &__big-text {
      font-size: 24px;
    }
  }

  .gamers {
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    margin: 20px 0;

    font-weight: 400;

    border-radius: 16px;
    background: $content-bg;
    box-shadow: $main-shadow;

    .account-gamers {
      flex-grow: 1;
      position: relative;

      &__avatar {
        border-top-left-radius: 16px; border-top-right-radius: 16px;
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      &__text {
        position: absolute;
        bottom: 16px;
        left: 16px;
      }

      &__name {
        font-size: 18px;
      }

      &__games {
        font-size: 14px;
        opacity: .5;
      }

      &__liked {
        position: absolute;
        top: 16px;
        right: 16px;
      }
    }

    .gamers-info {
      display: flex;
      flex-wrap: wrap;
      padding: 24px 16px 16px;

      &__text {
        width: 50%;
        margin-bottom: 10px;
      }
    }

    &--liked {
      min-width: 100%;
      margin-right: 24px;
    }
  }

  .buttons {
    @include flexing(space-around);
    width: 250px;
    margin: 0 auto;

    button {
      @include flexing(center);
      width: 40px; height: 40px;

      border-radius: 50%;
      background: $content-bg;
      box-shadow: $main-shadow;

      &.btn-big {
        width: 48px; height: 48px;
        background: radial-gradient(circle, rgba(100,118,204,1) 0%, rgba(155,81,224,1) 100%);
        // background: linear-gradient(to right, #9B51E0,#6476CC);
      }

      &:first-child {
        background: linear-gradient(90deg, rgba(185, 43, 39, 1) 30%, rgba(21, 101, 192, 1) 100%);
        background-size: 300% 300%;
        animation: gradient 10s ease infinite;
      }

      &:last-child {
        background: linear-gradient(90deg, rgba(21, 101, 192, 1) 30%, rgba(185, 43, 39, 1) 100%);
        background-size: 300% 300%;
        animation: gradient 10s ease infinite;
      }
    }
  }
</style>