<template>
  <router-link to="/dialog" class="dialog">
    <DialogAvatar></DialogAvatar>
    <div class="dialog__text">
      <Text16>Денис, допустим</Text16>
      <div class="dialog__content"><Text14>вы: За моего отца!</Text14></div>
    </div>
  </router-link>
</template>

<script>
  import DialogAvatar from '@/components/avatar/DialogAvatar.vue'
  import Text14 from '@/components/text/Text14.vue'
  import Text16 from '@/components/text/Text16.vue'

  export default {
      components: {
          DialogAvatar, Text14, Text16,
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
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>