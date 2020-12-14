<template>
  <transition name="slideInUp">
    <div
      id="search-container"
      @click.self="closeSearchMenu"
      v-if="searchMenuState"
      class="bg-dark py-1"
    >
      <input
        type="text"
        v-model="keyword"
        id="search-input"
        placeholder="Search..."
        class="flex-grow-1 w-100 rounded align-middle pr-5 pl-1"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Arrow_icon.svg/1200px-Arrow_icon.svg.png"
        id="icon-search"
        @click="setSearchKeyword"
      />
    </div>
  </transition>
</template>

<style scoped>
#icon-search {
  width: 30px;
  height: 32px;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  /* color: var(--search-icon); */
}
#serach-input {
  resize: none;
  outline: none;
  padding: 0.3125rem;
  border-radius: 0.25rem;
  border: none;
}
#search-container {
  height: 3.125rem;
  padding: 0 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 800;
  /* justify-content: space-around; */
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

