<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>SPA(Laravel+Vue+Vuetify)</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <router-link to="/">
          <v-btn text>Home</v-btn>
        </router-link>
        <router-link to="/question">
          <v-btn text>Question</v-btn>
        </router-link>
        <router-link to="/category">
          <v-btn text>Type</v-btn>
        </router-link>
        <router-link to="/login">
          <v-btn text>Login</v-btn>
        </router-link>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

