<template>
  <v-container>
    <div class="display-1 mb-2">New Reply</div>
    <v-divider></v-divider>
    <vue-simplemde v-model="body" class="mt-5"></vue-simplemde>
    <v-btn color="warning" type="submit">Reply</v-btn>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      body: ''
    }
  }
}
</script>
