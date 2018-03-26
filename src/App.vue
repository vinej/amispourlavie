<template>
  <div id="app">
    <div>
      <app-header></app-header>
    </div>
    <aside>
    </aside>
    <main>  
      <router-view></router-view>
    </main>
    <footer>
    </footer>
  </div>
</template>

<script>
  import Header from './components/header/header.vue';
  export default {
    name: 'app',
    components: {
      'app-header': Header
    },
    created: function() {
      this.$store.dispatch('tryAutoLogin');
    }
  }
</script>

<style>
.container {
    display: grid;    
}
header {
    display: flex;
    grid-column: span 12;
    background-color:darkslategrey;
    height: 3rem;
    border: 1px solid grey;
    background: linear-gradient(darkgrey,gray);
}

header > div:nth-child(2) {
    margin-left: auto;
}

aside {
    grid-column: span 2;
}
main {
    grid-column: span 10;
}
footer {
    grid-column: span 12;
}

a:link, a:visited {
    background-color: transparent;
    color: white;
    margin : 0.5rem;
    padding: 0.5rem;
    text-align: center; 
    text-decoration: none;
    display: inline-block;
}

a:hover, a:active {
    background-color:whitesmoke;
}

.button-success,
.button-error,
.button-warning,
.button-secondary {
    color: white;
    border-radius: 4px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.button-success {
    background: rgb(28, 184, 65); /* this is a green */
}

.button-error {
    background: rgb(202, 60, 60); /* this is a maroon */
}

.button-warning {
    background: rgb(223, 117, 20); /* this is an orange */
}

.button-secondary {
    background: rgb(66, 184, 221); /* this is a light blue */
}

.button-xsmall {
    font-size: 70%;
}

.button-small {
    font-size: 85%;
}

.button-large {
    font-size: 110%;
}

.button-xlarge {
    font-size: 125%;
}

body {
    background-color:lightslategray;
    background: linear-gradient(lightslategray,gray);
}
</style>

