<template>
  <div class="mt-3 container">
    <v-card>
      <v-card-title>
        <div class="headline">{{data.user}}</div>
        <div class="ml-2">said {{data.created_at}}</div>
        <v-spacer></v-spacer>
        <div class="caption">{{data.body}}</div>
        <!--<like :content="data"></like> -->
      </v-card-title>
      <v-divider></v-divider>

      <!--  <edit-reply v-if="editing" :reply="data"></edit-reply>

      <v-card-text v-else v-html="reply"></v-card-text>-->

      <v-divider></v-divider>
      <div>
        <v-card-actions v-if="own">
          <v-btn icon small @click="edit">
            <v-icon color="orange">edit</v-icon>
          </v-btn>
          <v-btn icon small @click="destroy">
            <v-icon color="red">delete</v-icon>
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>
<script>

export default {
  props: ['data'],
  computed: {
    own() {
      return User.own(this.data.user_id)
    }
  }
}
</script>
