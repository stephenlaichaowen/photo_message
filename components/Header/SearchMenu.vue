<template>
  <transition name="slideInUp">
    <div
      id="search-container"
      v-if="searchMenuState"
      class="bg-dark py-1 px-3"
    >
      <div id="search-content">
        <input
          type="text"
          v-model="keyword"
          id="search-input"
          placeholder="Search..."
          class="align-middle"
        />
        <img
          src="/arrow.png"
          id="icon-search"
          @click="setSearchKeyword"
        />
        <!-- <i id="icon-search" @click="setSearchKeyword" class="fas fa-arrow-left"></i> -->
        <img
          src="https://s3.amazonaws.com/s3.moveon.org/moui/close-icon.png"
          id="icon-close"
          @click="closeSearchMenu"
        />
      </div>
    </div>
  </transition>
</template>

<style scoped>
#search-content {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
}
#icon-search {
  left: 0.3125rem;
}
#icon-close {
  right: 0.3125rem;
  border-radius: 50%;
  overflow: hidden;
}
#icon-search,
#icon-close {
  width: 1.5625rem;
  height: 1.5625rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
#search-input {
  resize: none;
  outline: none;
  padding: 0.25rem 0.625rem 0.25rem 2.1875rem;
  border-radius: 2.5rem;
  border: none;
  width: 100%;
}
#search-container {
  height: 3.125rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 800;
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

<script>
export default {
  data() {
    return {
      keyword: '',
    }
  },
  computed: {
    searchMenuState: {
      get() {
        return this.$store.getters.searchMenuState
      },
    },
  },
  methods: {
    setSearchKeyword() {
      // this.$store.commit('setSearchMenuState', true)
      this.$store.commit('setSearchKeyword', this.keyword)
      this.keyword = ''
    },
    closeSearchMenu() {
      this.$store.commit('setSearchMenuState', false)
    },
  },
}
</script>

