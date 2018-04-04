<template>
    <form @submit.prevent="onSubmit" class="pure-form pure-form-stacked" style="margin:10px">
      <fieldset>
        <legend>Sign Up</legend>
        <div :class="{invalid: $v.email.$error}">
          <label for="email">Courriel</label>
          <input
                  type="email"
                  id="email"
                  @blur="$v.email.$touch()"
                  v-model="email">
          <p v-if="!$v.email.email">Courriel invalide</p>
          <p v-if="$v.email.$error && !$v.email.required">Ce champ est requis</p>
        </div>
        <div :class="{invalid: $v.password.$error}">
          <label for="password">Mot de passe</label>
          <input
                  type="password"
                  id="password"
                  @blur="$v.password.$touch()"
                  v-model="password">
        </div>
        <div :class="{invalid: $v.confirmPassword.$error}">
          <label for="confirm-password">Confirmation mot de passe</label>
          <input
                  type="password"
                  id="confirm-password"
                  @blur="$v.confirmPassword.$touch()"
                  v-model="confirmPassword">
        </div>
        <div>
          <label for="cameraInput">Prendre photo: </label>
          <input type="file" capture="camera" accept="image/*" id="cameraInput" name="cameraInput">
        </div>
        <button class="pure-button pure-button-primary" type="submit">Submit</button>
      </fieldset>
      </form>
</template>


<script lang="ts">
  import { required, email, numeric, minValue, minLength, sameAs, requiredUnless } from 'vuelidate/lib/validators';
  export default {
    data: function() {
      return {
        email: '',
        age: null,
        password: '',
        confirmPassword: '',
        country: 'usa',
        hobbyInputs: [],
        terms: false
      }
    },
    validations: {
      email: {
        required,
        email
      },
      age: {
        required,
        numeric,
        minVal: minValue(18)
      },
      password: {
        required,
        minLen: minLength(6)
      },
      confirmPassword: {
        sameAs: sameAs(vm => {
          return vm.password;
        })
      },
    },
    methods: {
      onSubmit: function() {
        const formData = {
          email: this.email,
          age: this.age,
          password: this.password,
          confirmPassword: this.confirmPassword,
          country: this.country,
          hobbies: this.hobbyInputs.map(hobby => hobby.value),
          terms: this.terms
        }
        console.log(formData);
        this.$store.dispatch('user/signup', formData);
      }
    }
  }
</script>
