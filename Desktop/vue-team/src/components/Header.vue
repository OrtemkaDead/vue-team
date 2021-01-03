<template>
  <header><slot></slot></header>
</template>

<script>
  export default {
    components: {

    }
  }
</script>

<style lang="scss">
  header {
    @include pos-fixed(0, unset, $head-h);
    @include flexing(space-between);
    padding: $main-p;

    .title {
      font-size: 24px;

      background: linear-gradient(to right, #9d50bb, #6e48aa);
      background-size: 200% 200%;
      animation: gradient 10s ease infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .avatar {
      @include avatar(36px);
    }
  }
</style>