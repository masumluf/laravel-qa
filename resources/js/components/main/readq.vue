<template>
  <singlequestion :question="fullquestion"></singlequestion>
</template>
<script>
import singlequestion from "./SingleQuestion";
export default {
  data() {
    return {
      fullquestion: {}
    }
  }, created() {
    axios.get(`/api/question/${this.$route.params.slug}`)
      .then(res => {
        this.fullquestion = res.data.data
      })
      .catch(err => {
        console.log(err);
      })
  },
  components: {
    singlequestion
  }
}
</script>
