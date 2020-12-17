<template>
  <div v-if="loaderState" id="container">
    <img id="loader" src="/loading.gif" alt="loader">
  </div>
</template>

<script>
export default {
  computed: {
    loaderState: {
      get() {
        return this.$store.getters.loaderState
      },
    }
  }
}
</script>

<style scoped>
#loader {
  width: 30%;
}
#container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;  
  background: #fff;
}
</style>