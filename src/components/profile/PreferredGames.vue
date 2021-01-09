<template>
  <div class="preferred-games">
    <TextMedium>Предпочитаемые игры</TextMedium>
    <HorizontalList>
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
      <img src="@/assets/img/avatar.png" alt="">
    </HorizontalList>
  </div>
</template>

<script>
  import TextMedium from '@/components/text/TextMedium.vue'
  import HorizontalList from '@/components/HorizontalList.vue'

  export default {
      components: {
          TextMedium, HorizontalList,
      }
  }
</script>