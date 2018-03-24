<template>
<div class="pure-g">
    <div v-for="n in 2" :key="n" class="card pure-u-1">
        <div>
            <div>Name: Alfred</div>
            <div>Race: Chat allemand</div>
            <div>Age: 4 ans</div>
            <div>Prix: 2000$</div>
            <div>Desc: Amical qui aime les enfants. Aime sortir dehors tous les jours</div>
            <button class="button-success">Adopter</button>
        </div>
        <br>
        <div>
            <img src="http://lorempixel.com/300/300/cats"/>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({

});
</script>

<style>
 .card {
     padding: 1rem;
     background-color:seashell;
     margin: 1rem;
     border-style: solid;
     border: skyblue;
 }
</style>



