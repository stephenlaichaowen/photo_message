<template>
  <div id="searchbox">
    <img   
      src="/magnifier-final.png"
      id="icon-search"
      @click="$store.commit('setSearchMenuState', true)"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: ''
    }
  }
}
</script>

<style scoped>
#icon-search {
  width: 1.375rem;
  height: 1.375rem;
}
#searchbox {
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.slideInRight-enter-active {
  animation: slideInRight 0.5s;
}
.slideInRight-leave-active {
  animation: slideInRight 0.5s reverse;
}
@keyframes slideInRight {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
</style>