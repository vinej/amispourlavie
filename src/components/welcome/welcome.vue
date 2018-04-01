<template>
<div class="welcome">
  <form class="pure-form">
    <div class="flex-one-column">
      <h1>Amis pour la Vie</h1>
      <h5 style="margin-top: -1.4rem">Le site d'adoption d'animaux du Québec</h5>
      <label for="state">Région:</label>
      <select id="state">
          <option>Montréal</option>
          <option>Laval</option>
          <option>Quebec</option>
          <option>Sherbrooke</option>
          <option>Toutes les régions</option>
      </select>
      <label for="name">Critère de recherche: </label>
      <input id="name" name="search"/>
      <br>
      <button @click.prevent="search = true" class="pure-button">Rechercher</button>
    </div>
  </form>
  <hr>
  <app-pets v-if="search"></app-pets>
</div>
</template>

<script>
  import Pets from '../../components/search/pets.vue';
  export default {
    data: function() {
      return {
        name: 'welcome',
        search: false
      }
    },
    components: {
      'app-pets': Pets
    },
    created: function() {
      this.$store.dispatch('user/tryAutoLogin');
    }
  }
</script>

<style>

.welcome {
  background-color:rgb(231, 246, 250)
}

.flex-one-column {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 16rem;
}
</style>


