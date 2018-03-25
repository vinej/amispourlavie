<template>
  <header>
    <div class="logo">
      <router-link to="/">Amis&nbsp;pour la&nbsp;Vie</router-link>
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

