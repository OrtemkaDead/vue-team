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
          <Text18>Имя пользователя</Text18>
          <div class="profile-info__status">
            <Text12>Статус пользователя</Text12>
          </div>

        </div>
      </div>

      <button class="profile-btn"><a href="#">Редактировать</a></button>

      <PreferredGames></PreferredGames>

      <StatsGames></StatsGames>


    </div>

  </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import PreferredGames from '@/components/profComp/PreferredGames.vue'
    import StatsGames from '@/components/profComp/StatsGames.vue'
    import Title from '@/components/text/Title.vue'
    import Text18 from '@/components/text/Text18.vue'
    import Text12 from '@/components/text/Text12.vue'
    import Avatar36 from '@/components/avatar/Avatar36.vue'
    import Avatar56 from '@/components/avatar/Avatar56.vue'


    export default {
        components: {
            Header, PreferredGames, StatsGames, Avatar36, Avatar56,
            Title, Text18, Text12,
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