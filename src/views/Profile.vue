<template>
  <div class="profile">
    <Header>
      <template v-slot:left>
        <Title>ID6566777</Title>
      </template>
      <template v-slot:right>
        <Avatar36></Avatar36>
      </template>
    </Header>

    <div class="content">

      <div class="profile-info">
        <Avatar56></Avatar56>
        <div class="profile-info__text">
          <TextBig>Имя пользователя</TextBig>
          <div class="profile-info__status">
            <TextShallow>Статус пользователя</TextShallow>
          </div>

        </div>
      </div>

      <button class="profile-btn"><a href="#">Редактировать</a></button>

      <PreferredGames />

      <StatsGames />


    </div>

  </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import PreferredGames from '@/components/profile/PreferredGames.vue'
    import StatsGames from '@/components/profile/StatsGames.vue'
    import Title from '@/components/text/Title.vue'
    import TextBig from '@/components/text/TextBig.vue'
    import TextShallow from '@/components/text/TextShallow.vue'
    import Avatar36 from '@/components/avatar/Avatar36.vue'
    import Avatar56 from '@/components/avatar/Avatar56.vue'


    export default {
        components: {
            Header, PreferredGames, StatsGames, Avatar36, Avatar56,
            Title, TextBig, TextShallow,
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

    &__text {
      margin-left: 16px;
    }

    &__status {
      font-weight: 300;
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
</style>