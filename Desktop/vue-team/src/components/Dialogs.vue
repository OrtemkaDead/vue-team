<template>
  <div class="dialogs">
    <Header>
      <div class="title">Диалоги</div>
      <img class="avatar" src="@/assets/img/avatar.png" alt="">
    </Header>

    <div class="content">

      <a href="#" class="dialog">
        <img class="dialog__avatar" src="@/assets/img/avatar.png" alt="">
        <div class="dialog__text">
          <div class="dialog__name">Артес</div>
          <div class="dialog__content">вы: За моего отца!</div>
        </div>
      </a>
      <a href="#" class="dialog">
        <img class="dialog__avatar" src="@/assets/img/avatar.png" alt="">
        <div class="dialog__text">
          <div class="dialog__name">Артес</div>
          <div class="dialog__content">вы: За моего отца!</div>
        </div>
      </a>
      <a href="#" class="dialog">
        <img class="dialog__avatar" src="@/assets/img/avatar.png" alt="">
        <div class="dialog__text">
          <div class="dialog__name">Артес</div>
          <div class="dialog__content">вы: За моего отца!</div>
        </div>
      </a>
      <a href="#" class="dialog">
        <img class="dialog__avatar" src="@/assets/img/avatar.png" alt="">
        <div class="dialog__text">
          <div class="dialog__name">Артес</div>
          <div class="dialog__content">вы: За моего отца!</div>
        </div>
      </a>
      <a href="#" class="dialog">
        <img class="dialog__avatar" src="@/assets/img/avatar.png" alt="">
        <div class="dialog__text">
          <div class="dialog__name">Артес</div>
          <div class="dialog__content">вы: За моего отца!</div>
        </div>
      </a>
      <a href="#" class="dialog">
        <img class="dialog__avatar" src="@/assets/img/avatar.png" alt="">
        <div class="dialog__text">
          <div class="dialog__name">Артес</div>
          <div class="dialog__content">вы: За моего отца!</div>
        </div>
      </a>
      <a href="#" class="dialog">
        <img class="dialog__avatar" src="@/assets/img/avatar.png" alt="">
        <div class="dialog__text">
          <div class="dialog__name">Артес</div>
          <div class="dialog__content">вы: За моего отца!</div>
        </div>
      </a>
      <a href="#" class="dialog">
        <img class="dialog__avatar" src="@/assets/img/avatar.png" alt="">
        <div class="dialog__text">
          <div class="dialog__name">Артес</div>
          <div class="dialog__content">вы: За моего отца!</div>
        </div>
      </a>
      <a href="#" class="dialog">
        <img class="dialog__avatar" src="@/assets/img/avatar.png" alt="">
        <div class="dialog__text">
          <div class="dialog__name">Артес</div>
          <div class="dialog__content">вы: За моего отца!</div>
        </div>
      </a>

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

  export default {
    components: {
      Header, Nav,
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

  .dialog {
    @include flexing(unset);
    margin-bottom: 16px;

    &__avatar {
      @include avatar(48px, 12px);
    }

    &__text {
      white-space: nowrap;
      overflow: hidden;
    }

    &__content {
      font-size: 14px;
      opacity: .5;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>