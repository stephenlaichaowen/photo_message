<template>
  <div id="searchbox">
    <!-- <input
      id="searchbox-input"
      v-model="keyword"
      @keyup.enter="setSearchKeyword"
      type="text"
      placeholder="Search..."
      class="flex-grow-1 align-middle pr-5 rounded pl-1"
    /> -->
    <i
      id="icon-search"
      @click="setSearchKeyword"
      class="fas fa-search text-info"
    ></i>
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
      this.$store.commit('setSearchMenuState', true)
      // this.$store.commit('setCameraMenuState', true)
      // this.$store.commit('setSearchKeyword', this.keyword)
      this.keyword = ''
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