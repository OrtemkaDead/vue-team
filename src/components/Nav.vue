<template>
  <nav>
    <router-link :to="{name: 'home'}">
      <home-icon class="icon" />
    </router-link>
    <router-link :to="{name: 'chats'}">
      <message-icon class="icon" />
    </router-link>
    <router-link :to="{name: 'profile'}">
      <user-icon class="icon" />
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
    @include pos-fixed(unset, 0, $nav-h - 40px);
    @include flexing(space-around);
    margin: $main-p;

    border-radius: 16px;
    background: $content-bg;
    box-shadow: $main-shadow;

    object{pointer-events:none;}

    .router-link-active {
      .icon {
        fill: $active-color;
      }
    }
  }

  .icon {
    max-width: 30px;
    max-height: 30px;
    fill: #fff;
  }
</style>
