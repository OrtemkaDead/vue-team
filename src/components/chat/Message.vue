<template>
  <div class="message__sms" :class="className">
    <div class="message__content">{{ message.text }}</div>
    <div class="message__time">{{ message.time }}</div>
  </div>
</template>

<script>
  export default {
      props: {
          message: {
              type: Object,
              default: () => {}
          }
      },
      computed: {
          className () {
              return {
                  'message__sms--from-me': this.message.type === 'from-me',
                  'message__sms--from-them': this.message.type === 'from-them'
              }
          }
      }
  }
</script>

<style lang="scss">
  .message {

    &__content {
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
  }
</style>