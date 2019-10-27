<template>
  <v-banner two-line>
    <v-avatar slot="icon" color="deep-purple accent-4" size="40">
      <v-icon icon="mdi-lock" color="black"></v-icon>
    </v-avatar>
    <p>{{question.title}}</p>
    {{question.body}}
    <template v-slot:actions>
      <v-btn text color="deep-purple accent-4">Action</v-btn>
      <v-btn text color="deep-purple accent-4">Action</v-btn>
    </template>
  </v-banner>
</template>
<script>
export default {
  props: ['question'],
  created() {
    console.log(this.question);
  }
}
</script>
