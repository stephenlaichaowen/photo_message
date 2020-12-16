<template>
  <div id="searchbox">
    <div       
      id="icon-search"
      @click="setSearchmenu"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    setSearchKeyword() {
      this.$store.commit('setSearchmenu', true)
    }
  },
}
</script>

<style scoped>
#icon-search {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  width: 1.375rem;
  height: 1.375rem;
  color: var(--theme-color);
  /* background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Feedbin-Icon-home-search.svg/768px-Feedbin-Icon-home-search.svg.png'); */
  background: url('https://www.pinclipart.com/picdir/middle/485-4851736_free-clipart-icons.png');
  background-position: center;
  background-size: cover;
}
/* #searchbox-input {
  width: 7.5rem;
  resize: none;
  outline: none;
  border: none;
} */
#searchbox {
  position: relative;
  margin-left: auto;
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