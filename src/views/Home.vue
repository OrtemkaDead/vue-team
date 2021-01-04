<template>
  <div>
    <Header>
      <template v-slot:left>
        <router-link to="/liked"><like-icon /></router-link>
      </template>
      <template v-slot:right>
        <img class="avatar"  src="@/assets/img/avatar.png" alt="">
      </template>
    </Header>

    <div class="content">

      <WelcomeText>
        <template v-slot:suptitle>
          <div class="welcome__suptitle">{{ welcome.SupTitle }}</div>
        </template>
        <template v-slot:title>
          <div class="welcome__title">{{ welcome.Title }}</div>
        </template>
      </WelcomeText>

      <Gamers></Gamers>

      <div class="buttons">
        <button><close-icon /></button>
        <button class="btn-big"><gamepad-icon /></button>
        <button><like-icon /></button>
      </div>

    </div>

  </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Gamers from '@/components/Gamers.vue'
    import WelcomeText from '@/components/WelcomeText.vue'
    // Icon
    import likeIcon from '@/assets/img/like-icon.svg'
    import closeIcon from '@/assets/img/close-icon.svg'
    import gamepadIcon from '@/assets/img/gamepad-icon.svg'

    export default {
        data() {
            return {
                welcome: {
                    SupTitle: "Привет, пользователь!",
                    Title: "Время оценивать",
                },
            };
        },
        components: {
            Header, Gamers, WelcomeText,
            likeIcon, closeIcon, gamepadIcon,
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