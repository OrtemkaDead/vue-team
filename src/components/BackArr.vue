<template>
  <div class="back-arr" @click="goBack"><span></span></div>
</template>

<script>
  export default {
      methods: {
          goBack() {
              this.$router.go(-1)
          }
      }
  }
</script>

<style lang="scss" scoped>
  .back-arr {
    display: block;
    width: 18px;
    height: 2px;
    position: relative;

    background: #fff;

    & span:before {
      @include pseudo;
      width: 10px;
      height: 2px;
      transform: rotate(-45deg);
      transform-origin: left bottom;
      background: #fff;
    }

    & span:after {
      @include pseudo;
      width: 10px;
      height: 2px;
      transform: rotate(45deg);
      transform-origin: left top;
      background: #fff;
    }
  }
</style>