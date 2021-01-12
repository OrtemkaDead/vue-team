<template>
  <router-link :to="{name: 'chat'}" class="chat">
    <DialogAvatar></DialogAvatar>
    <div class="chat__text">
      <TextMedium>Денис, допустим</TextMedium>
      <div class="chat__content"><TextSmall>вы: За моего отца!</TextSmall></div>
    </div>
  </router-link>
</template>

<script>
  import DialogAvatar from '@/components/avatar/DialogAvatar.vue'
  import TextSmall from '@/components/text/TextSmall.vue'
  import TextMedium from '@/components/text/TextMedium.vue'

  export default {
      components: {
          DialogAvatar, TextSmall, TextMedium,
      }
  }
</script>

<style lang="scss" scoped>
  .chat {
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