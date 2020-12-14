<template>
  <transition name="slideInUp">
    <div id="search-container" @click="closeSearchMenu" v-if="searchMenuState" class="bg-dark">
      <input type="text" id="search-input" class="rounded">
      <!-- <i id="icon-close" @click="closeSearchMenu" class="fas fa-times text-light"></i> -->
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    searchMenuState: {
      get() {
        return this.$store.getters.searchMenuState
      }
    }
  },
  methods: {
    setSearchKeyword() {
      this.$store.commit('setSearchMenuState', true)
      // this.$store.commit('setSearchKeyword', this.keyword)
      this.keyword = ''
    },
    closeSearchMenu() {
      this.$store.commit('setSearchMenuState', false)
    }
  }
}
</script>

<style scoped>
#serach-input {
  width: 80%;
  /* border-radius: 0.625rem; */
}
#search-container {
  height: 3.125rem;
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 800;
  display: flex;
  justify-content: space-around;
}
.slideInUp-enter-active {
  animation: slideInUp 0.3s;
}
.slideInUp-leave-active {
  animation: slideInUp 0.3s reverse;
}
@keyframes slideInUp {
  0% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
</style>