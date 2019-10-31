<template>
  <div class="mt-3 container">
    <v-card>
      <v-card-title>
        <div class="headline">{{data.user}}</div>
        <div>
          <div class="ml-2">said {{data.created_at}}</div>
          <v-spacer></v-spacer>
        </div>

        <!--<like :content="data"></like> -->
      </v-card-title>
      <edit-reply v-if="editing" :reply="data"></edit-reply>
      <div class="caption mt-2 pl-5" v-else>
        <p>{{body}}</p>
      </div>
      <v-divider></v-divider>

      <v-divider></v-divider>
      <div v-if="!editing">
        <v-card-actions v-if="own">
          <v-btn icon small @click="edit">
            <v-icon color="orange">edit</v-icon>
          </v-btn>
          <v-btn icon small @click="destroy">
            <v-icon color="red">delete</v-icon>
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>
<script>
import EditReply from "./EditReply";
export default {
  props: ['data', 'index'],
  data() {
    return {
      editing: false,
      body: this.data.body
    }
  },
  methods: {
    edit() {
      this.editing = true
    },
    destroy() {
      EventBus.$emit('delete', this.index)
    },
    listen() {
      EventBus.$on('cancel', () => {
        this.editing = false
      })

    }

  },
  computed: {
    own() {
      return User.own(this.data.user_id)
    }
  }, created() {
    this.listen()
  },
  components: {
    EditReply
  }
}
</script>
