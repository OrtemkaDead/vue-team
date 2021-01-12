<template>
  <div class="wrap-home">
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

      <transition name="slide-fade">
        <Gamer v-if="like"></Gamer>
      </transition>

      <div class="buttons">
        <RoundButton><close-icon class="icon"/></RoundButton>
        <RoundButton class="big"><gamepad-icon class="icon"/></RoundButton>
        <button class="circle-btn" @click="like = !like">
          <like-icon class="icon"/>
        </button>
<!--        <RoundButton><like-icon class="icon"/></RoundButton>-->
      </div>

    </div>

  </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Gamer from '@/components/Gamer.vue'
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
        data () {
            return {
                like: true
            }
        },
        components: {
            Header, Gamer, WelcomeText, Avatar36, Title, TextShallow, RoundButton,

            likeIcon, closeIcon, gamepadIcon,
        }
    }
</script>

<style lang="scss" scoped>
  .wrap-home {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;

    background: radial-gradient(circle at 28px -226px, rgba(62, 19, 186, 0.7) 25%, #21114f 35%, #121212 48%);
    //background: linear-gradient(156deg, rgba(62,19,186,1) -3%, rgba(18,18,18,1) 30%);
    //background: linear-gradient(159deg, rgba(62, 19, 186, .7) 5%, rgb(33, 17, 79) 16%, rgba(18, 18, 18, 1) 31%);
  }
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

  .slide-fade-enter-active {
    transition: all .4s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(200px);

    opacity: 0;
  }
</style>