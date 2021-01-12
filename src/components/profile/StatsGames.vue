<template>
  <div class="stats-games">

    <TextMedium>Статистика по играм</TextMedium>

    <HorizontalList>
      <StatsGamesItem>Game1</StatsGamesItem>
    </HorizontalList>

    <StatsGamesItemContent />
  </div>
</template>

<script>
  import TextMedium from '@/components/text/TextMedium.vue'
  import HorizontalList from '@/components/HorizontalList.vue'
  import StatsGamesItem from '@/components/profile/StatsGamesItem.vue'
  import StatsGamesItemContent from '@/components/profile/StatsGamesItemContent.vue'

  export default {
      components: {
          TextMedium, StatsGamesItemContent, HorizontalList, StatsGamesItem,
      }
  }
</script>
