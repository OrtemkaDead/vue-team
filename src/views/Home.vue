<template>
  <div>
    <Header>
      <template v-slot:left>
        <router-link to="/liked"><like-icon /></router-link>
      </template>
      <template v-slot:right>
        <Avatar36></Avatar36>
      </template>
    </Header>

    <div class="content">

      <WelcomeText>
        <template v-slot:suptitle>
          <Text12>Привет, пользователь!</Text12>
        </template>
        <template v-slot:title>
          <Title>Время оценивать</Title>
        </template>
      </WelcomeText>

       <Gamers></Gamers>

      <Buttons></Buttons>

    </div>

  </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Gamers from '@/components/Gamers.vue'
    import WelcomeText from '@/components/WelcomeText.vue'
    import Avatar36 from '@/components/Avatar36.vue'
    import Title from '@/components/Title.vue'
    import Text12 from '@/components/Text12.vue'
    import Buttons from '@/components/Buttons.vue'

    //Icon
    import likeIcon from '@/assets/img/like-icon.svg'

    export default {
        components: {
            Header, Gamers, WelcomeText, Avatar36, Title, Text12, Buttons,

            likeIcon,
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
</style>