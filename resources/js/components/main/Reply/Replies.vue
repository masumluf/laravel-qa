<template>
  <div>
    <reply v-for="(reply,index) in replies" :key="reply.id" :index="index" :data="reply"></reply>
  </div>
</template>
<script>
import Reply from "./Reply";
export default {

  props: ['replies'],
  components: {
    Reply
  }
}
</script>
