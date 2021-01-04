<template>
  <div class="preferred-games">
    <div class="preferred-games__title">Предпочитаемые игры</div>
    <div class="profile-games">

      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">

    </div>
  </div>
</template>

<style lang="scss" scoped>
  .profile-games {
    display: flex;
    overflow-x: auto;
    padding: 16px 0 24px;
    img {
      @include avatar(48px, 12px);
    }
  }
</style>