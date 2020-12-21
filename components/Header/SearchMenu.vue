<template>
  <!-- <transition v-if="!$store.state.loaderState" name="slideInUp"> -->
  <transition v-if="$store.state.searchMenuState" name="slideInUp">
    <div
      id="search-container"
      class="py-1 px-3"
    >
      <div id="search-content">
        <input
          type="text"
          v-model="keyword"
          id="search-input"
          placeholder="Search..."
          class="align-middle bg-dark"
        />
        <img
          src="/arrow.png"
          id="icon-back"
          @click="closeSearchMenu"
        />
        <img
          src="/search-icon.webp"
          id="icon-search"
          @click="setSearchKeyword"
        />
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
  methods: {
    setSearchKeyword() {
      this.$store.commit('setSearchKeyword', this.keyword)
      this.keyword = ''
    },
    closeSearchMenu() {      
      this.$store.commit('getPhotoMessage')
      this.$store.commit('setSearchMenuState', false)
    },
  },
}
</script>

<style scoped>
#search-content {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
}
#icon-back {
  left: 0.3125rem;
  width: 1.5625rem;
  height: 1.5625rem;
}
#icon-search {
  right: 0.625rem;
  border-radius: 50%;
  overflow: hidden;
  width: 1.25rem;
  height: 1.25rem;
}
#icon-back,
#icon-search {
  /* width: 1.5625rem;
  height: 1.5625rem; */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
#search-input::placeholder {
  color: white;
}
#search-input {
  resize: none;
  outline: none;
  padding: 0.25rem 0.625rem 0.25rem 2.5rem;
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
  background: #000;
  
  /* margin-bottom: 0.5rem; */
  position: fixed;
  left: 0;
  top: 0;
  /* bottom: 0; */
  z-index: 400;
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


