<template>
  <div>
    <singlequestion v-if="fullquestion.user_id" :question="fullquestion"></singlequestion>
  </div>
</template>
<script>
import singlequestion from "./SingleQuestion";
import editingquestion from "./editingquestion";
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
    editingquestion
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
