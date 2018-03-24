<template>
<div style="margin:10px">
  <img src="/chien-japonais.jpg" height="100" width="300"/>
  <h1>Amis pour la vie</h1>
  <label for="search">Rechercher: </label>
  <input name="search"/>
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

