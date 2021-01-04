<template>
  <div class="buttons">
    <button><close-icon class="icon"/></button>
    <button class="btn-big"><gamepad-icon class="icon"/></button>
    <button><like-icon class="icon"/></button>
  </div>
</template>

<script>
    // Icon
    import likeIcon from '@/assets/img/like-icon.svg'
    import closeIcon from '@/assets/img/close-icon.svg'
    import gamepadIcon from '@/assets/img/gamepad-icon.svg'

    export default {
        components: {
            likeIcon, closeIcon, gamepadIcon,
        }
    }
</script>

<style lang="scss" scoped>
  .buttons {
    @include flexing(space-around);
    width: 250px;
    margin: 0 auto;

    button {
      @include flexing(center);
      width: 40px; height: 40px;

      border-radius: 50%;
      background: $content-bg;
      box-shadow: $main-shadow;

      &.btn-big {
        width: 48px; height: 48px;
        background: radial-gradient(circle, rgba(100,118,204,1) 0%, rgba(155,81,224,1) 100%);
        // background: linear-gradient(to right, #9B51E0,#6476CC);
      }

      &:first-child {
        background: linear-gradient(90deg, rgba(185, 43, 39, 1) 30%, rgba(21, 101, 192, 1) 100%);
        background-size: 300% 300%;
        animation: gradient 10s ease infinite;
      }

      &:last-child {
        background: linear-gradient(90deg, rgba(21, 101, 192, 1) 30%, rgba(185, 43, 39, 1) 100%);
        background-size: 300% 300%;
        animation: gradient 10s ease infinite;
      }
    }
  }

  .icon {
    fill: #fff;
  }
</style>