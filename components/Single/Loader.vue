<template>
  <div v-if="loaderState" id="loader" class="text-center text-light">
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
  </div>
</template>

<script>
export default {
  computed: {
    loaderState: {
      get() {
        return this.$store.getters.loaderState
      },
    },
  }
}
</script>

<style scoped>
#loader {
  height: calc(100vh - 3.125rem);
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>