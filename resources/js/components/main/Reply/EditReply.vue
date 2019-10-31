<template>
  <v-container>
    <vue-simplemde v-model="body" class="mt-5"></vue-simplemde>
    <v-btn color="green" type="submit" @click="submit">Update Reply</v-btn>
    <v-btn color="black" class="white--text" type="submit" @click="cancel">Cancel</v-btn>
  </v-container>
</template>
<script>
export default {
  props: ['reply'],
  data() {
    return {
      body: ''
    }
  },
  created() {
    this.body = this.reply.body
  },
  methods: {
    submit() {
      axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.reply_id}`, { body: this.body })
        .then(res => {
          console.log(res)

          this.cancel()
        })
        .catch(error => console.log(error))
    },
    cancel() {
      EventBus.$emit('cancel')
    }
  }
}
</script>
