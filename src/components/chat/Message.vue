<template>
  <div class="message__sms">
    <div class="message__content" :content="content"></div>
    <div class="message__time" :time="time">00:00</div>
  </div>
</template>

<script>
  export default {
      props: {
          content: {
              type: String
          },
          time: {
              type: Object
          }
      }
  }
</script>