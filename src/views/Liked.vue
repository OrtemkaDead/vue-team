<template>
  <div>
    <Header>
      <template v-slot:left>
        <router-link class="header__back-arr" to="/"><span></span></router-link>
      </template>
      <template v-slot:right>
        <img class="avatar" src="@/assets/img/avatar.png" alt="">
      </template>
    </Header>

    <div class="content">

      <WelcomeText>
        <template v-slot:title>
          <div class="welcome__title">{{ welcome.Title }}</div>
        </template>
      </WelcomeText>

      <div class="liked">

        <div class="liked__item">
          <Gamers>
            <template v-slot:icon-liked>
              <div class="account-gamers__liked"><img src="@/assets/img/gamepad-icon.svg" alt=""></div>
            </template>
          </Gamers>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Gamers from '@/components/Gamers.vue'
    import WelcomeText from '@/components/WelcomeText.vue'

    export default {
        data() {
            return {
                welcome: {
                    Title: "Твой выбор",
                },
            };
        },
        components: {
            Header, Gamers, WelcomeText,
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

  .gamers {
    min-width: 100%;
    margin-right: 24px;
  }
</style>