<template>
  <header  class="pure-menu pure-menu-horizontal">
    <div class="logo">
      <router-link to="/">Home</router-link>
    </div>
    <div v-if="auth">
      <ul class="pure-menu-list">
          <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
              <a href="#" id="menuLink1" class="pure-menu-link">Dashboard</a>
              <ul class="pure-menu-children">
                  <li class="pure-menu-item"><a href="#" class="pure-menu-link">Mes annonces</a></li>
                  <li class="pure-menu-item"><a href="#" class="pure-menu-link">Mon panier</a></li>
                  <li class="pure-menu-item"><a href="#" class="pure-menu-link">Mon profile</a></li>
              </ul>
          </li>
      </ul>
    </div>
    <div v-if="!auth">
      <router-link to="/signup">Sign Up</router-link>
    </div>
    <div v-if="!auth">
      <router-link to="/signin">Sign In</router-link>
    </div>
    <div v-if="auth">
      <a href="3"  @click="onLogout">Logout</a>
    </div>
  </header>
</template>

<script  lang="ts">
  export default {
    computed: {
      auth: function() {
        return this.$store.getters.isAuthenticated;
      }
    },
    methods: {
      onLogout: function() {
        this.$store.dispatch('logout');
      }
    }
  }
</script>

