<template>
<nav id="dashboard">
  <div class="grid-2">
      <div class="center">
          <h1>Amis pour la vie</h1>
          <label for="search">Rechercher: </label>
          <input name="search"/>
      </div>
      <div class="right">
        <img src="https://lorempixel.com/400/200/animals"/>
      </div>
  </div>
  <hr>
</nav>
</template>

<script>
  import axios from 'axios';

  export default {
    computed: {
      email () {
        return !this.$store.getters.user ? false : this.$store.getters.user.email
      }
    },
    created () {
      this.$store.dispatch('fetchUser')
    }
  }
</script>