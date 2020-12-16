<template>
  <div v-if="loaderState" id="container" class="bg-dark">
    <img id="loader" src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="loader">
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
}
</style>