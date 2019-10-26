<template></template>
<script>
export default {
  created() {
    EventBus.$emit('logout')
    //User.logout()
  }
}
</script>
