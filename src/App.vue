<template>
  <div id="app">
    <router-view v-if="token"/>

    <Nav v-if="!isDialogRoute"></Nav>
  </div>
</template>

<script>
import Home from '@/views/Home.vue'
import Dialogs from '@/views/Dialogs.vue'
import Profile from '@/views/Profile.vue'
import Liked from '@/views/Liked.vue'
import Dialog from '@/views/Dialog.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  data() {
    return {
      token: false
    }
  },
  components: {
    Home, Liked, Dialogs, Dialog, Profile,
    Nav,
  },
  computed: {
    isDialogRoute() {
      return this.$route.path === '/dialog';
    }
  },
  mounted: function () {
    let token = localStorage.getItem('token', false);
    if (!token) this.getToken();

    this.token = token;
  },
  methods: {
    getToken() {
      console.log('загружаю данные')

      const data = {
        email: 'test@test.ru',
        password: '123456'
      };

      fetch('http://team.loc/api/token/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
          .then((response) => response.json())
          .then((result) => {
            if (result.status === "ok") {
              const token = result.data.plainTextToken;
              localStorage.setItem('token', token);
              this.token = token;
              console.log('данные загружены, ', token);
            }
          });
    }
  }
}
</script>

<style lang="scss">
// Обнуление
* {
  padding: 0;
  margin: 0;
  border: 0;
}

*, *:before, *:after {
  box-sizing: border-box;
}

:focus, :active {
  outline: none;
}

a:focus, a:active {
  outline: none;
}

input, button, textarea {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  border: 0;
}

button {
  cursor: pointer;
}

a, a:visited {
  color: inherit;
  text-decoration: none;
  font-family: inherit;
  font-size: inherit;
}

a:hover {
  text-decoration: none;
}

img {
  vertical-align: top;
}

/* ================================== */

::-webkit-scrollbar {
  width: 0;
}

body {
  font-family: "Open Sans", sans-serif;
  font-weight: $fw;
  font-size: $fz;
  color: $text-color;

  background: $main-bg;
}
</style>
