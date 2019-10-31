<template>
  <div>
    <singlequestion v-if="fullquestion.user_id" :question="fullquestion"></singlequestion>
    <replies :question="fullquestion" v-if="fullquestion.replies"></replies>
    <new-reply :data="fullquestion.slug"></new-reply>
  </div>
</template>
<script>
import singlequestion from "./SingleQuestion";
import editingquestion from "./editingquestion";
import Replies from "./Reply/Replies";
import NewReply from "./Reply/NewReply";
export default {
  data() {
    return {
      fullquestion: {},
    }
  }, created() {
    this.getQuestion(),
      this.getEdit()
  },
  components: {
    singlequestion,
    editingquestion,
    Replies,
    NewReply
  },
  methods: {
    getQuestion() {
      axios.get(`/api/question/${this.$route.params.slug}`)
        .then(res => {
          this.fullquestion = res.data.data
        })
        .catch(err => {
          console.log(err);
        })
    },
    getEdit() {
      EventBus.$on('editQuestion', () => {
        this.editingRulues = true
      })
    }
  }
}
</script>
