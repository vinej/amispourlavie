<template>
<div class="welcome">
  <div class="welcome-text">
  <h1>Amis pour la Vie</h1>
  <form class="pure-form">
  <label>Rechercher: </label>
  <input name="search"/>
  </form>
  <hr>
  </div>
  <app-pets></app-pets>
</div>
</template>

<script>
  import Pets from '../../components/search/pets.vue';
  export default {
    name: 'welcome',
    components: {
      'app-pets': Pets
    },
    created: function() {
      this.$store.dispatch('tryAutoLogin');
    }
  }
</script>

<style>
.welcome {
  margin: 0.4rem;
}

.welcome-text {
  margin-left: 0.5rem;
}
</style>


