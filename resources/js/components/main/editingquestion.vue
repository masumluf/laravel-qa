<template>
  <v-container>
    <v-form @submit.prevent="update">
      <v-text-field v-model="form.title" label="Question Title" required></v-text-field>
      <v-select
        label="Components"
        :items="categories"
        v-model="form.category_id"
        item-text="name"
        item-value="id"
        autocomplete
      ></v-select>

      <vue-simplemde v-model="form.body"></vue-simplemde>

      <v-card-actions>
        <v-btn class="orange darken-4" type="submit">
          <v-icon>update</v-icon>
        </v-btn>
        <v-btn class="orange darken-4" @click="cancelq">
          <v-icon>cancel</v-icon>
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-container>
</template>
<script>
export default {
  props: ['data'],
  data() {
    return {
      form: {
        title: null,
        body: null,
        category_id: null
      },
      categories: []
    }
  },
  created() {
    this.form = this.data;
    axios.get('/api/category')
      .then(res => this.categories = res.data.data)
  },
  methods: {
    update() {
      axios.patch(`/api/question/${this.data.slug}`, this.form)
        .then(res => {
          this.cancelq()
        }
        )
        .catch(err => console.log(err))
      //   console.log(this.form.category_id);
      //   console.log(this.categories);
    },
    cancelq() {
      EventBus.$emit('cancelqa');
      this.form = ''
    }
  }
}
</script>

