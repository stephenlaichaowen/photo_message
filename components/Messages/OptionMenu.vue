<template>
  <transition name="slideInUp" v-if="$store.state.optionMenuState">
    <div id="option-container" class="bg-info">
      <div id="flex-box" @click.self="closeOptionMenu">
        <div class="icon">
          <img 
            class="trashcan"
            @click="deleteMessage"
            src="/trashcan-icon-white.png" alt="trash icon">
        </div>
        <!-- <img 
          class="close"
          @click="closeOptionMenu"
          src="/close-icon.jpg" alt="close icon"
        > -->
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    closeOptionMenu() {
      this.$store.commit('setOptionMenuState', false)
      this.$store.commit('setRemovedMessageId', null)
    },
    deleteMessage() {
      this.$store.commit('removeMessage')
      this.$store.commit('setOptionMenuState', false)
      this.$store.commit('setRemovedMessageId', null)
    }
  },
}
</script>

<style scoped>
.trashcan {
  width: 1.5625rem;
  height: 1.5625rem;
}
.close {
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  /* transform: translateY(-50%); */
}
#flex-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}
.icon {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#option-container {
  height: 3.125rem;
  width: 100%;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 250;
}
.slideInUp-enter-active {
  animation: slideInUp 0.3s;
}
.slideInUp-leave-active {
  animation: slideInUp 0.3s reverse;
}
@keyframes slideInUp {
  0% {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
</style>


