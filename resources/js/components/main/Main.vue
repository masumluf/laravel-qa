<template>
  <v-container fluid grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs8>
        <question v-for="question in questions" :key="question.path" :question="question"></question>
      </v-flex>
      <v-flex xs4>
        <category-sidebar></category-sidebar>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import question from "./question";
import CategorySidebar from "./CategorySidebar";
export default {
  data() {
    return {
      questions: []
    }
  },
  components: {
    question, CategorySidebar
  },
  created() {
    axios.get('/api/question')
      .then(res => {
        this.questions = res.data.data
      })
      .catch(err => console.log(err))
  }
}
</script>
