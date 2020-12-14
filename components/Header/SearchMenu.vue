<template>
  <transition name="slideInUp">
    <div
      id="search-container"
      @click.self="closeSearchMenu"
      v-if="searchMenuState"
      class="bg-dark"
    >
      <input type="text" v-model="keyword" id="search-input" class="flex-grow-1 w-100 align-middle pr-5" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Arrow_icon.svg/1200px-Arrow_icon.svg.png" id="icon-search" @click="setSearchKeyword" />
    </div>
  </transition>
</template>

<style scoped>
#icon-search {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  color: var(--search-icon);
}
#serach-input {
  resize: none;
  outline: none;
  padding: 0.3125rem;
  border-radius: 2rem;
  /* border: none; */
  border: 1px solid var(--theme-color);
}
#search-container {
  height: 3.125rem;
  padding: 1rem 2rem;
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

