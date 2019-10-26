<template>
  <div>
    <v-container>
      <form @submit.prevent="submit">
        <div v-for="(id,i) in student_id" class="pa-3">
          <span class="blue--text">{{id.name}}</span>
          <br />
          <input type="radio" :name="id.name+i" v-model="info" :value="`${id.student_id}-P`" />
          Present
          <input
            type="radio"
            v-model="info"
            :name="id.name+i"
            :value="`${id.student_id}-A`"
          />
          Absent
          <input
            type="radio"
            v-model="info"
            :name="id.name+i"
            :value="`${id.student_id}-L`"
          />
          Late
          <hr />
        </div>

        <v-btn color="success" type="submit">Submit</v-btn>
      </form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [],
      student_id: [
        { name: 'Andrew', student_id: '52346' },
        { name: 'Mathew', student_id: '86975' },
        { name: 'Max', student_id: '78654' },
        { name: 'Jhon', student_id: '36589' },
        { name: 'Flam', student_id: '74859' },
        { name: 'Meli', student_id: '62398' }
      ]
    }
  },
  methods: {
    submit() {
      console.log(this.info)
    }
  }
}
</script>
