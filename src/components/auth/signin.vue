<template>
    <form @submit.prevent="onSubmit" class="pls">
      <div class="grid-1 mts mbs">
        <label class="w30" for="email">Courriel :</label>
        <input type="email" v-model="email">
      </div>
      <div class="grid-1 mts mbs">
        <label class="w30" for="password">Mot de passe :</label>
        <input type="password" v-model="password">
      </div>
      <div>
        <button class="btn--success" type="submit">Submit</button>
      </div>
    </form>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      onSubmit () {
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
