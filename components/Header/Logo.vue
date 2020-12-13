<template>
  <div id="logo">
    <span id="title" class="text-info">Photo Message</span>
    <span class="badge bg-danger ml-2 text-light">{{
      numOfMessages
    }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    numOfMessages: {
      get() {
        return this.$store.getters.messages.length
      },
    },
  },
}
</script>

<style scoped>
#title {
  font-weight: 400;
  font-family: 'Pacifico', cursive;
  /* border: 1px solid magenta; */
  /* font-size: 1.25rem; */
  text-transform: uppercase;
}
#logo {
  /* border: 1px solid red; */
  display: flex;
  /* align-items: baseline; */
  align-items: center;
}
#header {
  padding: 0.5rem 0.9375rem;
  height: 3.125rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 800;
  display: flex;
  align-items: center;
}
</style>