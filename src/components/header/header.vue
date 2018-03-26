<template>
  <header  class="pure-menu pure-menu-horizontal">
    <div class="logo">
      <router-link to="/"><i class="material-icons">home</i></router-link>
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
      <div class="tooltip">
        <router-link to="/signup"><span class="tooltiptext">Joindre le site</span><i class="material-icons">phonelink</i></router-link>
      </div>
    </div>
    <div v-if="!auth">
      <div class="tooltip">
        <router-link to="/signin"><span class="tooltiptext">Se connecter</span><i class="material-icons">people</i></router-link>
      </div>
    </div>
    <div v-if="auth">
      <div class="tooltip">
        <router-link to="/notification"><span class="tooltiptext">Notification</span><i class="material-icons">notifications</i></router-link>
      </div>
    </div>
    <div v-if="auth">
      <div class="tooltip">
        <router-link to="/share"><span class="tooltiptext">Partager</span><i class="material-icons">share</i></router-link>
    </div>
    </div>
    <div v-if="auth">
      <div class="tooltip">
        <router-link to="/basket"><span class="tooltiptext">Aller au panier</span><i class="material-icons">shopping_basket</i></router-link>
      </div> 
    </div>
    <div v-if="auth">
      <div class="tooltip">
        <a href="3"  @click="onLogout"><span class="tooltiptext">Se déconnecter</span><i class="material-icons">eject</i></a>
      </div> 
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

