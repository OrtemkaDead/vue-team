<template>
  <div class="dialogs">
    <Header>
      <template v-slot:left>
        <BackArr></BackArr>
      </template>
      <template v-slot:right>
        <div class="header__content">
          <div class="header__text">
            <div class="header__title">Диалоги</div>
            <div class="header__subtitle">Диалоги</div>
          </div>
          <Avatar36></Avatar36>
        </div>
      </template>
    </Header>

    <div class="content-chat">

      <div class="message__body"
           v-for="message in messages"
           :key="message.id"
           :message="message"
      >
      </div>

      <div class="message__input-form">
        <input class="message__input" type="text" placeholder="Введите текст">
        <button class="message__btn">
          <message-dispatch-icon class="icon" />
        </button>
      </div>

    </div>

  </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import BackArr from '@/components/BackArr.vue'
    import Avatar36 from '@/components/avatar/Avatar36.vue'
    import Message from '@/components/chat/Message.vue'

    //Icon
    import messageDispatchIcon from '@/assets/img/message-dispatch-icon.svg'

    export default {
        components: {
            Header, BackArr, Avatar36, Message,

            messageDispatchIcon,
        }
    }
</script>

<style lang="scss">
  .content-chat {
    @include pos-fixed($head-h, 0, unset);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow-y: auto;
    margin: 0 $main-p;

    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #9b51e0, #6476cc);
      border-radius: 10px;
    }
  }

  .message-header {
    &__content {
      display: flex;
    }

    &__text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-right: 8px;
    }

    &__title {
      font-size: 14px;
      font-weight: 400;
    }

    &__subtitle {
      font-size: 12px;
      font-weight: 300;
      opacity: .5;
    }
  }

  .message {
    &__body {
      overflow-y: auto;
    }

    &__input-form {
      display: flex;
      justify-content: space-between;
      margin: $main-p 0;
    }

    &__input {
      width: 100%;
      max-height: 40px;
      padding: 13.5px 16px;
      margin-right: 10px;

      font-size: 13px;
      font-weight: 300;

      background: $content-bg;
      border-radius: 16px;
    }

    &__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 40px;
      min-height: 40px;

      background-color: $content-bg;
      border-radius: 16px;

      .icon {
        fill: #fff;
        width: 18px;
        height: 20px;

        transition: fill .1s linear;
      }

      &:active .icon{
        fill: #7B61FF;
      }
    }
  }
</style>