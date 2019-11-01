<template>
  <div>
    <v-btn class="ma-2" text icon :color="this.color" @click="like">
      <v-icon>mdi-thumb-up</v-icon>
      {{count}}
    </v-btn>
  </div>
</template>
<script>
export default {
  props: ['data'],
  data() {
    return {
      liked: this.data.liked,
      count: this.data.like_count,
      LikeColor: this.color
    }
  },
  computed: {
    color() {
      return this.liked ? "red" : "red lighten-4"
    }
  },
  methods: {
    like() {
      if (User.logedIn()) {
        this.liked ? this.likeDown() : this.likeUp()
        this.liked = !this.liked
      }
    },
    likeUp() {
      axios.post(`/api/like/${this.data.reply_id}`)
        .then(res => {
          this.count++

        })


    },
    likeDown() {
      axios.delete(`/api/like/${this.data.reply_id}`)
        .then(res => {
          this.count--

        })

    }
  }
}
</script>
