<template>
  <div class="preferred-games">
    <Text16>Предпочитаемые игры</Text16>
    <ProfileGames>
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
    </ProfileGames>
  </div>
</template>

<script>
  import Text16 from '@/components/text/Text16.vue'
  import ProfileGames from '@/components/profComp/ProfileGames.vue'

  export default {
      components: {
          Text16, ProfileGames,
      }
  }
</script>