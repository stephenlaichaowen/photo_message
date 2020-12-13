<template>
  <transition name="slideInRight">
    <div id="menu" key="key1">
      <i
        id="menu-trash"
        @click="getMessageId"
        key="key2"
        class="fas fa-trash text-danger"
      ></i>
      <i id="menu-edit" key="key3" class="fas fa-edit text-success"></i>
      <i
        id="menu-close"
        key="key4"
        class="fas fa-times text-light"
      ></i>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    messageId: {
      get() {
        return this.$store.getters.messageId
      }
    }
  },
  methods: {
    getMessageId() {
      alert(`message id: ${this.messageId}`)
    }
  },
}
</script>

<style scoped>
.fas {
  /* border: 1px solid white; */
  padding: 0.625rem 0.625rem;
}
#menu {
  background: rgba(0, 0, 0, 0.7);
  /* background: rgba(255, 255, 255, 0.3); */
  display: flex;
  padding: 0 0.3125rem;
  position: absolute;
  /* right: -100%; */
  /* right: 100%; */
  /* left: 0; */
  right: 0;
  height: 2.3125rem;
  /* border-radius: 1.5rem; */
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
}
.slideInRight-enter-active {
  animation: slideInRight .5s;
}
.slideInRight-leave-active {
  animation: slideInRight .5s reverse;
}
@keyframes slideInRight {
  0% {
    -webkit-transform: translate3d(90%, 0, 0);
    transform: translate3d(90%, 0, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
</style>