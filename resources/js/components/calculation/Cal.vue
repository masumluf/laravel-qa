<template>
  <div>
    <v-container>
      <form @submit.prevent="submit">
        <div v-for="(student,i) in students" class="pa-3">
          <span class="blue--text">{{student.name}}</span>
          <br />
          <input type="radio" :name="student.name" v-model="student.attendance" value="P" />
          Present
          <input
            type="radio"
            :name="student.name"
            v-model="student.attendance"
            value="A"
          />
          Absent
          <input
            type="radio"
            :name="student.name"
            v-model="student.attendance"
            value="L"
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
      info: {
        name: [],
        student_id: [],
        attendance: []
      },
      students: [{ name: 'Andrew', student_id: '52346', attendance: '' },
      { name: 'Mathew', student_id: '86975', attendance: '' },
      { name: 'Max', student_id: '78654', attendance: '' },
      { name: 'Jhon', student_id: '36589', attendance: '' },
      { name: 'Flam', student_id: '74859', attendance: '' },
      { name: 'Meli', student_id: '62398', attendance: '' }
      ]
    }
  },
  methods: {
    submit() {
      this.students.forEach((item) => {
        // console.log(item.name);
        // console.log(item.student_id);
        // console.log(item.attendance);
        this.info.name.push(item.name);
        this.info.student_id.push(item.student_id);
        this.info.attendance.push(item.attendance)
      })
      console.log(this.info);
    }
  }

}
</script>
