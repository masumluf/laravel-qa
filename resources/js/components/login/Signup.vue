<template>
  <v-container>
    <v-form @submit.prevent="signup">
      <v-text-field v-model="form.name" label="Name" required></v-text-field>
      <span class="red--text" v-if="errors.name">Name is Required!</span>

      <v-text-field v-model="form.email" label="E-mail" required></v-text-field>
      <span class="red--text" v-if="errors.email">Email must be Valid and Required!</span>

      <v-text-field v-model="form.password" type="password" label="Password" required></v-text-field>
      <span class="red--text" v-if="errors.password">Password is Required!</span>

      <v-text-field
        v-model="form.password_confirmation"
        type="password"
        label="Re-Password"
        required
      ></v-text-field>
      <span class="red--text" v-if="errors.password_confirmation">Password must be Matched!</span>

      <v-checkbox label="Do you agree?"></v-checkbox>

      <v-btn color="success" type="submit">SignUp</v-btn>
      <router-link to="/login">
        <v-btn color="warning">Login</v-btn>
      </router-link>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors: {}
    }
  },
  methods: {
    signup() {
      axios.post('/api/auth/signup', this.form)
        .then(res => {
          User.responseAfterLogin(res)
          this.$router.push({ name: 'mainPage' })
        })
        .catch(error => this.errors = error.response.data.errors)
    }
  }
}
</script>
