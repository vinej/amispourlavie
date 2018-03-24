<template>
    <form @submit.prevent="onSubmit" class="pure-form pure-form-stacked" style="margin:10px">
      <fieldset>
        <legend>Sign In</legend>
        <label for="email">Courriel :</label>
        <input type="email" v-model="email">
        <label class="w30" for="password">Mot de passe :</label>
        <input type="password" v-model="password">
        <button class="pure-button pure-button-primary" type="submit">Submit</button>
      </fieldset>
    </form>
</template>

<script lang="ts">
  export default {
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      onSubmit:function() {
        const formData = {
          email: this.email,
          password: this.password,
        }
        console.log(formData)
        this.$store.dispatch('login', {email: formData.email, password: formData.password})
      }
    }
  }
</script>
