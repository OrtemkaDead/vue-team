<template>
  <div class="gamers">

    <div class="account-gamers">
      <img class="account-gamers__avatar" src="@/assets/img/user-img.jpg" alt="">
      <slot name="icon-liked"></slot>

      <div class="account-gamers__text">
        <div class="account-gamers__name">Артес</div>
        <div class="account-gamers__games">WoW</div>
      </div>
    </div>

    <div class="gamers-info">
      <div class="gamers-info__text">526 часов</div>
      <div class="gamers-info__text">80% точность</div>
      <div class="gamers-info__text">1.2 КД</div>
      <div class="gamers-info__text">Дискорд есть</div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
  .gamers {
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    margin: 20px 0;

    font-weight: 400;

    border-radius: 16px;
    background: $content-bg;
    box-shadow: $main-shadow;

    .account-gamers {
      flex-grow: 1;
      position: relative;

      &__avatar {
        border-top-left-radius: 16px; border-top-right-radius: 16px;
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      &__text {
        position: absolute;
        bottom: 16px;
        left: 16px;
      }

      &__name {
        font-size: 18px;
      }

      &__games {
        font-size: 14px;
        opacity: .5;
      }

      &__liked {
        position: absolute;
        top: 16px;
        right: 16px;
      }
    }

    .gamers-info {
      display: flex;
      flex-wrap: wrap;
      padding: 24px 16px 16px;

      &__text {
        width: 50%;
        margin-bottom: 10px;
      }
    }

    &--liked {
      min-width: 100%;
      margin-right: 24px;
    }
  }
</style>
