<template>
  <v-container>
    <div class="display-1 mb-2">New Reply</div>
    <v-divider></v-divider>
    <vue-simplemde v-model="body" class="mt-5"></vue-simplemde>
    <v-btn color="warning" type="submit" @click="submit">Reply</v-btn>
  </v-container>
</template>
<script>
export default {
  props: ['data'],
  data() {
    return {
      body: ''
    }
  },
  methods: {
    submit() {
      axios.post(`/api/question/${this.data}/reply`, { body: this.body })
        .then(res => {
          this.body = ''
          EventBus.$emit('newReply', res.data.reply)
          window.scrollTo(0, 0)
        })
    }
  }
}
</script>
