<template>
  <div>
    <Header>
      <router-link class="header__back-arr" to="/home"><span></span></router-link>
      <img class="avatar" src="@/assets/img/avatar.png" alt="">
    </Header>

    <div class="content">
      <div class="welcome">
        <div class="welcome__text">Твой выбор</div>
      </div>

      <div class="liked">

        <div class="liked__item">
          <div class="gamers gamers--liked">

            <div class="account-gamers">
              <img class="account-gamers__avatar" src="@/assets/img/user-img.jpg" alt="">
              <div class="account-gamers__liked"><img src="@/assets/img/gamepad-icon-liked.svg" alt=""></div>

              <div class="account-gamers__text">
                <div class="account-gamers__name">Артес</div>
                <div class="account-gamers__games">WoW, LoL</div>
              </div>
            </div>

            <div class="gamers-info">
              <div class="gamers-info__text">526 часов</div>
              <div class="gamers-info__text">80% точность</div>
              <div class="gamers-info__text">1.2 КД</div>
              <div class="gamers-info__text">Дискорд есть</div>

            </div>
          </div>
        </div>


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
    padding: 0 $main-p;
  }

  .liked {
    display: flex;
    overflow-x: auto;
    // запрещает скролл
    overflow: hidden;
    height: 100%;

    &__item {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      min-width: 100%;
      margin-right: 24px;
    }
  }

  .welcome {
    font-weight: 400;

    &__text {
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
</style>