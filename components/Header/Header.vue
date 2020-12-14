<template>
  <div id="header" v-if="!loaderState" class="bg-light">
    <Logo />
    <Searchbox />
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
    }
  },
  computed: {
    loaderState: {
      get() {
        return this.$store.getters.loaderState
      },
    }
  },
  methods: {
    setSearchboxState() {
      console.log(`open searchbox`)
      this.$store.commit('setSearchboxState', true)
    },
    setKeyword() {
      this.$store.commit('setKeyword', this.keyword)
    },
  },
}
</script>

<style scoped>
#searchbox-input {
  width: 120px;
  resize: none;
  outline: none;
  border: none;
}
#searchbox {
  position: relative;
  margin-left: auto;
}
#caption {
  width: 20%;
}
#title {
  font-weight: 400;
  font-family: 'Pacifico', cursive;
  text-transform: uppercase;
}
#icon-search {
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
}
#logo {
  display: flex;
  align-items: center;
}
#header {
  padding: 0.5rem 0.625rem 0.5rem 0.9375rem;
  height: 3.125rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 300;
  display: flex;
  align-items: center;
}
</style>