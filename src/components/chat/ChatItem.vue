<template>
  <div>
    <router-link :to="{name: 'chat'}" class="chat new-message">
      <ChatAvatar></ChatAvatar>
      <div class="chat__text">
        <TextMedium>
          <slot name="name">Денис, допустим</slot>
        </TextMedium>
        <div class="chat__content">
          <TextSmall>
            <slot name="message">Новое сообщение</slot>
          </TextSmall>
        </div>
      </div>
    </router-link>
    <router-link :to="{name: 'chat'}" class="chat">
      <ChatAvatar></ChatAvatar>
      <div class="chat__text">
        <TextMedium>
          <slot name="name">Денис, допустим</slot>
        </TextMedium>
        <div class="chat__content">
          <TextSmall>
            <slot name="message">вы: Привет</slot>
          </TextSmall>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
    import ChatAvatar from '@/components/avatar/ChatAvatar.vue'
    import TextSmall from '@/components/text/TextSmall.vue'
    import TextMedium from '@/components/text/TextMedium.vue'

    export default {
        components: {
            ChatAvatar, TextSmall, TextMedium,
        }
    }
</script>

<style lang="scss" scoped>
  .chat {
    @include flexing(unset);
    margin-bottom: 12px;
    padding: 16px;

    background: $content-bg;
    border-radius: 16px;

    &__text {
      white-space: nowrap;
      overflow: hidden;
    }

    &__content {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    /*&:last-child {*/
    /*  margin-bottom: 0;*/
    /*}*/
  }

  .new-message {
    position: relative;
    box-shadow: 0 0 30px 0 rgba(123, 97, 255, .25);

    &:after {
      @include pseudo;
      width: 8px;
      height: 8px;
      right: 16px;

      background: #6A55D6;
      border-radius: 50%;
    }
  }
</style>