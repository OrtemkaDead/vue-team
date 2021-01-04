<template>
  <div class="dialogs">
    <Header>
      <template v-slot:left>
        <div class="title">Диалоги</div>
      </template>
      <template v-slot:right>
        <img class="avatar" src="@/assets/img/avatar.png" alt="">
      </template>
    </Header>

    <div class="content">

      <Dialog></Dialog>

    </div>

    <Nav>
      <router-link to="/home">
        <svg class="icon">
          <use xlink:href='#icon-homepage'></use>
        </svg>
      </router-link>
      <router-link to="/dialogs">
        <svg class="icon active">
          <use xlink:href='#icon-message'></use>
        </svg>
      </router-link>
      <router-link to="/profile">
        <svg class="icon">
          <use xlink:href='#icon-profile'></use>
        </svg>
      </router-link>
    </Nav>
  </div>

</template>

<script>
  import Header from '@/components/Header.vue'
  import Nav from '@/components/Nav.vue'
  import Dialog from '@/components/Dialog.vue'

  export default {
    components: {
      Header, Nav, Dialog,
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