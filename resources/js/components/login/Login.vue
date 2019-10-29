<template>
  <v-container>
    <v-form @submit.prevent="login">
      <v-text-field v-model="form.email" label="E-mail" required></v-text-field>

      <v-text-field v-model="form.password" type="password" label="Password" required></v-text-field>

      <v-checkbox label="Do you agree?"></v-checkbox>

      <v-btn color="warning" type="submit">Login</v-btn>
      <router-link to="/signup">
        <v-btn color="success">Sign Up</v-btn>
      </router-link>
    </v-form>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      User.login(this.form)
      this.$router.push('/main')
    }

  },
  created() {
    if (User.logedIn()) {
      this.$router.push('/main')
    }
  }
}

</script>
