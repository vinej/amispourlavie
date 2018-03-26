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
    flex : 1;
    grid-column: span 12;
    height: 3rem;
    border-bottom: 1px solid black;
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
    background-color:rgb(165, 184, 206) !important;
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
    background: linear-gradient(lightslategray,rgb(152, 176, 207));
}

.pure-menu-link {
    background-color: lightslategray !important;
    color:white !important;
}

.pure-menu-children {
    background-color: lightslategray !important;
}

/* Tooltip container */
.tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
 
    /* Position the tooltip text - see examples below! */
    position: absolute;
     z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
    visibility: visible;
}

.tooltip .tooltiptext {
    top: +50px;
    right: 10px;
} 

</style>

