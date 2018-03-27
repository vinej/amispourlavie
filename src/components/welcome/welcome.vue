<template>
<div class="welcome">
  <div class="welcome-header">
    <form class="pure-form welcome-text">
    <h1>Amis pour la Vie</h1>
    <div class="welcome-space">
      <label>Régions:</label>
    </div>
    <div>
      <select id="state">
          <option>Montréal</option>
          <option>Laval</option>
          <option>Quebec</option>
          <option>Sherbrooke</option>
          <option>Toute les régions</option>
      </select>
    </div>
    <div class="welcome-space">
      <label>Rechercher: </label>
    </div>
    <div>
      <input name="search"/>
      <button @click.prevent="isSearch = true" class="pure-button">Recherche</button>
    </div>
    </form>
    <hr>
  </div>
  <div v-if="cSearch">
    <app-pets></app-pets>
  </div>
</div>
</template>

<script>
  import Pets from '../../components/search/pets.vue';
  export default {
    data: function() {
      return {
        name: 'welcome',
        isSearch: false
      }
    },
    computed: {
      cSearch : function() {
        return this.isSearch;
      }
    },
    components: {
      'app-pets': Pets
    },
    created: function() {
      this.$store.dispatch('tryAutoLogin');
    }
  }
</script>

<style>

.welcome-header {
  background-color: lightblue;
}


.welcome-text {
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

.welcome-space {
  padding-top :0.2rem;
}

</style>


