<template>
  <div v-if="loaderState" id="loader">
    <img src="/loader.gif" alt="loader">
  </div>

  <!-- <div v-if="loaderState" id="loader" class="text-center text-light">
    <div class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-secondary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-success" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-danger" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-warning" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-dark" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div> -->
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>