<template>
  <div class="dialogs">
    <Header>
      <template v-slot:left>
        <Title>Диалоги</Title>
      </template>
      <template v-slot:right>
        <Avatar36></Avatar36>
      </template>
    </Header>

    <div class="content">

      <ChatItem></ChatItem>
      <ChatItem></ChatItem>
      <ChatItem></ChatItem>

    </div>
  </div>

</template>

<script>
  import Header from '@/components/Header.vue'
  import ChatItem from '@/components/chat/ChatItem.vue'
  import Title from '@/components/text/Title.vue'
  import Avatar36 from '@/components/avatar/Avatar36.vue'

  export default {
    components: {
      Header, ChatItem, Avatar36, Title,
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    @include pos-fixed($head-h - 26, $nav-h, unset);
    overflow-y: auto;
    padding: 26px 16px;
  }
</style>