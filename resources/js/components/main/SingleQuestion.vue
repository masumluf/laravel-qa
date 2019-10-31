<template>
  <div>
    <editingquestion v-if="editRules" :data="question"></editingquestion>
    <v-banner two-line v-else class="mt-5">
      <v-avatar slot="icon" color="deep-purple accent-4" size="40">
        <v-icon icon="mdi-lock" color="black"></v-icon>
      </v-avatar>
      <p>{{question.title}}</p>
      {{question.body}}
      <div class="my-2">
        <v-btn large color="error">Total ({{question.total_reply}}) Replies</v-btn>
      </div>
      <template v-slot:actions>
        <v-card-actions v-if="own">
          <v-btn dark @click="editQu">
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn dark @click="deleteQuestion">
            <v-icon>delete</v-icon>
          </v-btn>
        </v-card-actions>
      </template>
    </v-banner>
  </div>
</template>
<script>
import editingquestion from "./editingquestion";
export default {
  props: ['question'],
  components: {
    editingquestion
  },
  data() {
    return {
      dialog: false,
      own: User.own(this.question.user_id),
      editRules: false,
    }
  },
  created() {
    this.cancelEdits()
  },
  methods: {
    deleteQuestion() {
      axios.delete(`/api/question/${this.question.slug}`)
        .then(res => this.$router.push('/main'))
        .catch(error => console.log(error))
    },
    editQu() {
      //EventBus.$emit('editQuestion');
      this.editRules = true
    },
    cancelEdits() {
      EventBus.$on('cancelqa', () => {
        this.editRules = false
      })
    }
  }
}
</script>
