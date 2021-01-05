<template>
  <div>
    <Header>
      <template v-slot:left>
        <BackArr></BackArr>
      </template>
      <template v-slot:right>
        <Avatar36></Avatar36>
      </template>
    </Header>

    <div class="content">

      <WelcomeText>
        <template v-slot:title>
          <Title>Твой выбор</Title>
        </template>
      </WelcomeText>

      <div class="liked">
        <div class="liked__item">
          <Gamers>
            <template v-slot:icon-liked>
              <gamepad-icon class="icon-liked" />
            </template>
          </Gamers>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import BackArr from '@/components/BackArr.vue'
    import WelcomeText from '@/components/WelcomeText.vue'
    import Avatar36 from '@/components/avatar/Avatar36.vue'
    import Title from '@/components/text/Title.vue'
    import Gamers from '@/components/Gamers.vue'

    //Icon
    import gamepadIcon from '@/assets/img/gamepad-icon.svg'

    export default {
        components: {
            Header, WelcomeText, Avatar36, Gamers, Title, BackArr,

            gamepadIcon,
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

  .gamers {
    min-width: 100%;
    margin-right: 24px;
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

  .icon-liked {
    position: absolute;
    top: 16px;
    right: 16px;
    fill: #6476CC;
  }
</style>