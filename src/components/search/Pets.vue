<template>
<div class="container-flex">
    <div v-for="n in 5" :key="n" class="card">
        <div>
            <img src="http://lorempixel.com/300/300/cats" class="card-img"/>
        </div>
        <div class="card-text">
            <div>Name: Alfred</div>
            <div>Race: Chat allemand</div>
            <div>Age: 4 ans</div>
            <div>Prix: 2000$</div>
            <div>Desc: Amical qui aime les enfants. Aime sortir dehors tous les jours</div>
            <button class="button-success card-button">Adopter</button>
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
.container-flex {
    display: flex;
    flex-wrap: wrap;

}
.card {
    display: flex;
    flex-direction: row;
    background-color: lightgrey;
    border: 2px solid green;
    padding: 1rem;
    margin: 1rem;
    width: 20rem;
}

.card-text {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
}

.card-img {
    width: 100%
}

.card-button {
    margin-top: 1rem;
    width: 10rem
}

</style>