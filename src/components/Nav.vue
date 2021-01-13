<template>
  <nav>
    <router-link :to="{name: 'home'}">
      <home-icon class="icon icon-home" />
    </router-link>
    <router-link :to="{name: 'chats'}">
      <message-icon class="icon icon-chats" />
    </router-link>
    <router-link :to="{name: 'profile'}">
      <user-icon class="icon icon-profile" />
    </router-link>
  </nav>
</template>

<script>
    // Icon
    import homeIcon from '@/assets/img/home-icon.svg'
    import messageIcon from '@/assets/img/message-icon.svg'
    import userIcon from '@/assets/img/user-icon.svg'

    export default {
        components: {
            homeIcon, messageIcon, userIcon,
        },
    }
</script>

<style lang="scss">
  nav {
    @include pos-fixed(unset, 0, $nav-h - 5);
    @include flexing(space-around);

    background: #191A1F;

    object{pointer-events:none;}

    .router-link-active {
      .icon-home {
        fill: $active-color;
      }
      .icon-chats {
        fill: #e1bf3a;
      }
      .icon-profile {
        fill: #f26470;
      }
    }
  }

  .icon {
    max-width: 30px;
    max-height: 30px;
    fill: #fff;
  }
</style>
