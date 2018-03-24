<template>
<div>
    <section class="grid-2-small-1 has-gutter pets-panel mbs" v-for="n in 2" :key="n">
        <div>
            <h3>Name: Alfred</h3>
            <h5>Race: Chat allemand</h5>
            <h5>Age: 4 ans</h5>
            <h5>Prix: 2000$</h5>
            <h5>Desc: Amical qui aime les enfants. Aime sortir dehors tous les jours</h5>
            <button class="btn--success">Adopter</button>
        </div>
        <div class="left mls ">
            <img src="http://lorempixel.com/400/300/cats"/>
        </div>
    </section>
</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
});
</script>

<style>
.pets-panel {
    background-color: lightyellow;
    border: 1px solid lightgray;
}
</style>

