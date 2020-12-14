<template>
  <transition name="slideInUp">
    <div
      id="search-container"
      v-if="searchMenuState"
      class="bg-dark py-1 px-3"
    >
      <input
        type="text"
        v-model="keyword"
        id="search-input"
        placeholder="Search..."
        class="flex-grow-1 w-100 align-middle"
      />
      <img
        src="https://www.freeiconspng.com/uploads/black-close-icon-3.png"
        id="icon-close"
        @click="closeSearchMenu"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Arrow_icon.svg/768px-Arrow_icon.svg.png"
        id="icon-search"
        @click="setSearchKeyword"
      />
    </div>
  </transition>
</template>

<style scoped>
#icon-close {
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
}
#icon-search {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
#search-input {
  resize: none;
  outline: none;
  padding: 0 15px;
  border-radius: 2.5rem;
  border: none;
}
#search-container {
  height: 3.125rem;
  /* padding: 0 2rem 0 0; */
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

