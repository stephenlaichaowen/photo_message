<template>
  <transition name="slideInUp">
    <div
      id="search-container"
      @click.self="closeSearchMenu"
      v-if="searchMenuState"
      class="bg-dark row"
    >
      <div id="search-content">
        <input
          type="text"
          v-model="keyword"
          id="search-input"
          class="rounded"
        />
        <img id="icon-search" @click="setSearchKeyword" />
      </div>
    </div>
  </transition>
</template>

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

<style scoped>
#search-content {
  position: relative;
  width: 100%;
  height: 100px;
}
#icon-search {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);  
}
#serach-input {
  /* width: 80%; */
  outline: none;
  border: 1px solid var(--theme-color);
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