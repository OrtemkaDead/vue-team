<template>
  <HorizontalList>
    <button class="profile-games__item active" type="button" data-tab="#tab_1">Game</button>
    <button class="profile-games__item" type="button" data-tab="#tab_2">Game</button>
    <button class="profile-games__item" type="button" data-tab="#tab_3">Game</button>
    <button class="profile-games__item" type="button" data-tab="#tab_4">Game</button>
    <button class="profile-games__item" type="button" data-tab="#tab_5">Game</button>
  </HorizontalList>
</template>

<script>
  import HorizontalList from '@/components/HorizontalList.vue'

  export default {
      components: {
          HorizontalList,
      }
  }
</script>