<template>
  <nav>
    <router-link to="/" class="icon">
      <home-icon />
    </router-link>
    <router-link to="/dialogs" class="icon">
      <message-icon />
    </router-link>
    <router-link to="/profile" class="icon">
      <user-icon />
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
        }
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
  }

  .active {
    svg {
      fill: #6476CC;
    }
  }

  .icon {
    max-width: 24px;
    max-height: 24px;

    svg {
      fill: #fff;
    }
  }
</style>
