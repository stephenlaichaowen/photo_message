<template>
  <div id="logo">
    <span id="title" class="text-light">Photo Message</span>
    <span class="badge bg-danger ml-2 text-light">{{
      $store.state.messages.length
    }}</span>
  </div>
</template>

<style scoped>
#title {
  font-weight: 400;
  font-family: 'Pacifico', cursive;
  text-transform: uppercase;
}
#logo {
  display: flex;
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