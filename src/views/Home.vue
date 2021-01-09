<template>
  <div>
    <Header>
      <template v-slot:left>
        <router-link :to="{name: 'liked'}"><like-icon /></router-link>
      </template>
      <template v-slot:right>
        <Avatar36></Avatar36>
      </template>
    </Header>

    <div class="content">

      <WelcomeText>
        <template v-slot:suptitle>
          <TextShallow>Привет, пользователь!</TextShallow>
        </template>
        <template v-slot:title>
          <Title>Время оценивать</Title>
        </template>
      </WelcomeText>

       <Gamers></Gamers>

      <div class="buttons">
        <RoundButton><close-icon class="icon"/></RoundButton>
        <RoundButton class="big"><gamepad-icon class="icon"/></RoundButton>
        <RoundButton><like-icon class="icon"/></RoundButton>
      </div>

    </div>

  </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Gamers from '@/components/Gamers.vue'
    import WelcomeText from '@/components/WelcomeText.vue'
    import Avatar36 from '@/components/avatar/Avatar36.vue'
    import Title from '@/components/text/Title.vue'
    import TextShallow from '@/components/text/TextShallow.vue'
    import RoundButton from '@/components/RoundButton.vue'


    //Icon
    import likeIcon from '@/assets/img/like-icon.svg'
    import closeIcon from '@/assets/img/close-icon.svg'
    import gamepadIcon from '@/assets/img/gamepad-icon.svg'

    export default {
        components: {
            Header, Gamers, WelcomeText, Avatar36, Title, TextShallow, RoundButton,

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

    .big {
      width: 48px; height: 48px;
      background: radial-gradient(circle, rgba(100,118,204,1) 0%, rgba(155,81,224,1) 100%);

      .icon {
        min-width: 28px;
      }
    }
  }
</style>