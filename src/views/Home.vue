<template>
  <div class="home">
    <Header>
      <template v-slot:left>
        <router-link to="/liked"><img class="title" src="@/assets/img/like-icon.svg" alt=""></router-link>
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
        <button><img src="@/assets/img/close-icon.svg" alt=""></button>
        <button class="btn-big"><img src="@/assets/img/gamepad-icon.svg" alt=""></button>
        <button><img src="@/assets/img/like-icon.svg" alt=""></button>
      </div>

    </div>

    <Nav>
      <router-link to="/home" class="icon">
        <home-icon />
      </router-link>
      <router-link to="/dialogs">
        <message-icon />
      </router-link>
      <router-link to="/profile" class="icon">
        <user-icon />
      </router-link>
    </Nav>
  </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Nav from '@/components/Nav.vue'
    import Gamers from '@/components/Gamers.vue'
    import WelcomeText from '@/components/WelcomeText.vue'
    import homeIcon from '@/assets/img/Icon-Main-Page.svg'
    import messageIcon from '@/assets/img/message-icon.svg'
    import userIcon from '@/assets/img/user-icon.svg'

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
            Header, Nav, Gamers, WelcomeText, homeIcon, messageIcon, userIcon
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