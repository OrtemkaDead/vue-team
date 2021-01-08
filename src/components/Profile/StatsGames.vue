<template>
  <div class="stats-games">

    <TextMedium>Статистика по играм</TextMedium>

    <StatsGamesItems />

    <StatsGamesItemsContent />
  </div>
</template>

<script>
  import TextMedium from '@/components/text/TextMedium.vue'
  import StatsGamesItems from '@/components/Profile/StatsGamesItems.vue'
  import StatsGamesItemsContent from '@/components/Profile/StatsGamesItemsContent.vue'

  export default {
      components: {
          TextMedium, StatsGamesItems, StatsGamesItemsContent,
      }
  }
</script>
