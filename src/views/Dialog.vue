<template>
  <div class="dialogs">
    <Header>
      <template v-slot:left>
        <router-link class="header__back-arr" to="/dialogs"><span></span></router-link>
      </template>
      <template v-slot:right>
        <div class="header__content">
          <div class="header__text">
            <div class="header__title">Диалоги</div>
            <div class="header__subtitle">Диалоги</div>
          </div>
          <img class="avatar" src="@/assets/img/avatar.png" alt="">
        </div>
      </template>
    </Header>

    <div class="content">

      <div class="message__body">

        <div class="message__sms message__sms--from-them">
          <div class="message__content">Какой-то большой текст ОЧень большой текст</div>
          <div class="message__time">00:00</div>
        </div>

        <div class="message__sms message__sms--from-me">
          <div class="message__content">Texxtrrrrrrrrrrrrr</div>
          <div class="message__time">00:00</div>
        </div>

        <div class="message__sms message__sms--from-them">
          <div class="message__content">Textt</div>
          <div class="message__time">00:00</div>
        </div>

      </div>

      <div class="message__input-form">
        <input class="message__input" type="text" placeholder="Введите текст">
        <button class="message__btn">
          <svg class="icon message-dispatch">
            <use xlink:href='#icon-message-dispatch'></use>
          </svg>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
    import Header from '@/components/Header.vue'

    export default {
        components: {
            Header,
        }
    }
</script>

<style lang="scss" scoped>
  .content {
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

    &__avatar {
      @include avatar(36px);
    }
  }

  .message {
    &__body {
      overflow-y: auto;
    }
    &__content { //Контент самого сообщения
      max-width: 60%;
      padding: 8px 16px;

      font-size: 13px;
      font-weight: 400;

      background: $content-bg;
      border-radius: 16px;
    }

    &__time {
      font-size: 9px;
      font-weight: 300;
      opacity: .5;
    }

    &__sms {
      display: flex;
      align-items: flex-end;
      margin-bottom: 10px;

      &--from-me {
        flex-direction: row-reverse;
        flex-wrap: wrap;
      }
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

      .message-dispatch {
        fill: #fff;
        width: 18px;
        height: 20px;

        transition: fill .1s linear;
      }

      &:active .message-dispatch{
        fill: #7B61FF;
      }
    }
  }
</style>