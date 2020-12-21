<template>
  <div id="header" v-if="!$store.state.loaderState" class="bg-info">
    <Logo />
    <!-- <Searchbox /> -->
  </div>
</template>

<style scoped>
#searchbox-input {
  width: 120px;
  resize: none;
  outline: none;
  border: none;
}
#searchbox {
  position: relative;
  margin-left: auto;
}
#caption {
  width: 20%;
}
#title {
  font-weight: 400;
  font-family: 'Pacifico', cursive;
  text-transform: uppercase;
}
#icon-search {
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
}
#logo {
  display: flex;
  align-items: center;
}
#header {
  padding: 0.5rem 0.625rem 0.5rem 1.25rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.125rem;
  z-index: 300;
  display: flex;
  align-items: center;
}
</style>