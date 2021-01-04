<template>
  <router-link to="/dialog" class="dialog">
    <DialogAvatar></DialogAvatar>
    <div class="dialog__text">
      <div class="dialog__name">Артес</div>
      <div class="dialog__content">вы: За моего отца!</div>
    </div>
  </router-link>
</template>

<script>
  import DialogAvatar from '@/components/DialogAvatar.vue'

  export default {
      components: {
          DialogAvatar,
      }
  }
</script>

<style lang="scss" scoped>
  .dialog {
    @include flexing(unset);
    margin-bottom: 16px;


    &__text {
      white-space: nowrap;
      overflow: hidden;
    }

    &__content {
      font-size: 14px;
      opacity: .5;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>