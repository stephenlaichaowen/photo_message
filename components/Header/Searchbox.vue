<template>
  <div id="searchbox">
    <img   
      src="/magnifier.png"
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
  /* position: absolute;
  top: 50%;
  right: 0.625rem;
  transform: translateY(-50%);
  color: var(--theme-color);
  background: url('https://www.pinclipart.com/picdir/middle/485-4851736_free-clipart-icons.png');
  background-position: center;
  background-size: cover; */
}
/* #searchbox-input {
  width: 7.5rem;
  resize: none;
  outline: none;
  border: none;
} */
#searchbox {
  /* border: 1px solid red; */
  /* position: relative;
  margin-left: auto; */
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