<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <p class="display-1 text--primary">{{question.title}}</p>
      <div>{{question.created_at}}</div>
      <p>by {{question.user}}</p>
      <div class="text--primary">{{question.body}}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="deep-purple accent-4">
        <router-link :to="question.path">Learn More</router-link>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ['question']
}
</script>
