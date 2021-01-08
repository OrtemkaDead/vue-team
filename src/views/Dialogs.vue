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

      <DialogItem v-for="chat of chats" v-bind:chat="chat"></DialogItem>

    </div>
  </div>

</template>

<script>
import Header from '@/components/Header.vue'
import DialogItem from '@/components/DialogItem.vue'
import Title from '@/components/text/Title.vue'
import Avatar36 from '@/components/avatar/Avatar36.vue'

export default {
  data() {
    return {
      chats: false
    };
  },
  components: {
    Header, DialogItem, Avatar36, Title,
  },
  computed: {},
  mounted() {
    this.loadChats();
  },
  methods: {
    loadChats() {
      const token = localStorage.getItem('token');
      console.log(token)
      fetch('http://team.loc/api/chat', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
          .then(response => response.json())
          .then(result => {
            console.log(result)
            this.chats = result;
          });
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  @include pos-fixed($head-h, $nav-h, unset);
  overflow-y: auto;
  margin: 0 $main-p;
  padding: 16px;

  border-radius: 16px;
  background: #262A35;
  box-shadow: $main-shadow;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #9b51e0, #6476cc);
    border-radius: 10px;
  }
}
</style>