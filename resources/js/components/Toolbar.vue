<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>SPA(Laravel+Vue+Vuetify)</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items v-for="item in items">
        <router-link :to="item.to" v-if="item.show">
          <v-btn text>{{item.title}}</v-btn>
        </router-link>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [{
        title: 'Forum', to: '/main', show: true
      }, {
        title: 'Question', to: '/question', show: User.logedIn()
      }, {
        title: 'Category', to: '/category', show: User.admin()
      },
      {
        title: 'Login', to: '/login', show: !User.logedIn()
      },
      {
        title: 'LogOut', to: '/logout', show: User.logedIn()
      }],
    }
  },
  created() {
    //console.log(this.items);
    EventBus.$on('logout', () => {
      User.logout();
    })
  }
}
</script>

