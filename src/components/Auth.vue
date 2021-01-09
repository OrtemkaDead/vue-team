<template>
  <div class="wrap">
    <h1>Auth</h1>
    <input class="input-email" type="email" placeholder="Введите email...">
    <input class="input-password" type="password" placeholder="Введите password...">
    <button class="btn">Auth</button>
  </div>
</template>

<style lang="scss" scoped>
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 200px 20px;
  }

  input, button {
    width: 100%;
    padding: 20px;
    margin-bottom: 5px;
    background: $content-bg;
  }
</style>