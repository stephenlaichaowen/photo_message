<template>
  <div v-if="$store.state.loaderState" id="container">
    <img id="loader" src="/loading.gif" alt="loader">
  </div>
</template>

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
  z-index: 250;
  display: flex;
  justify-content: center;
  align-items: center;  
  background: #fff;
}
</style>