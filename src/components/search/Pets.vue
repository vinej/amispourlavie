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
            <div>
                <button class="button-success card-button">Adopter</button>
                <button class="button-success card-button-short">Info</button>
            </div>
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

.child { 
    align-self: stretch; 
}

.card {
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius: 0.3rem;
    border: 1px solid grey;
    padding: 0.5rem;
    margin: 0.5rem;
    box-shadow: 0.1rem 0.1rem grey;
    max-width: 360px;
}

.card-text {
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    margin-left: 1rem;
    font-size: 0.9rem;
}

.card-img {
    width: 100%
}

.card-button {
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    margin-top: 0.4rem;
    width: 4.7rem
}

.card-button-short {
    margin-top: 0.4rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    width: 3rem
}

</style>