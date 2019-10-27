<template>
  <v-container>
    <v-form @submit.prevent="createqa">
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

      <v-btn color="warning" type="submit">Create</v-btn>
    </v-form>
  </v-container>
</template>
<script>
export default {
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
    axios.get('/api/category')
      .then(res => this.categories = res.data.data)
  },
  methods: {
    createqa() {
      axios.post('api/question', this.form)
        .then(res => console.log(res))
        .catch(err => console.log(err))
      //   console.log(this.form.category_id);
      //   console.log(this.categories);
    }
  }
}
</script>

