<template>
  <router-link :to="{ name: 'dialog', params: { id: chat.id } }" class="dialog">
    <DialogAvatar></DialogAvatar>
    <div class="dialog__text">
      <TextMedium>{{ chat.name }}</TextMedium>
      <div class="dialog__content">
        <TextSmall>{{ chat.last_message.content }}</TextSmall>
      </div>
    </div>
  </router-link>
</template>

<script>
import DialogAvatar from '@/components/avatar/DialogAvatar.vue'
import TextSmall from '@/components/text/TextSmall.vue'
import TextMedium from '@/components/text/TextMedium.vue'

export default {
  props: {
    chat: Object,
  },
  components: {
    DialogAvatar, TextSmall, TextMedium,
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