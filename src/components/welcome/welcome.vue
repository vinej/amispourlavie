<template>
<div class="welcome">
  <h1>Amis pour la vie</h1>
  <form class="pure-form">
  <label>Rechercher: </label>
  <input name="search"/>
  </form>
  <hr>
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
  margin: 1rem;
}
</style>


