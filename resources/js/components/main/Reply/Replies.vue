<template>
  <div>
    <reply v-for="(reply,index) in content" :key="reply.id" :index="index" :data="reply"></reply>
  </div>
</template>
<script>
import Reply from "./Reply";
export default {

  props: ['question'],
  data() {
    return {
      content: this.question.replies
    }
  },
  components: {
    Reply
  },
  created() {
    this.listen()
    //console.log(this.content);
  },
  methods: {
    listen() {
      EventBus.$on('newReply', (reply) => {
        this.content.unshift(reply)
      })
      EventBus.$on('delete', (index) => {
        axios.delete(`/api/question/${this.question.slug}/reply/${this.content[index].reply_id}`)
          .then(res => {
            console.log(res);
            this.content.splice(index, 1)
          })
          .catch(error => console.log(error))

      })
    }
  }
}
</script>
