<template>
<div class="welcome">
  <div class="welcome-header">
    <form class="pure-form welcome-text">
    <h1>Amis pour la Vie</h1>
    <div>
      <label>Rechercher: </label>
    </div>
    <div>
      <input name="search"/>
    </div>
    <div class="welcome-space">
      <label>Catétogies:</label>
    </div>
    <div>
      <select id="state">
          <option>Animaux</option>
          <option>Articles</option>
          <option>Soin des animaux</option>
          <option>Magasins</option>
          <option>Toute les catégories</option>
      </select>
    </div>
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


