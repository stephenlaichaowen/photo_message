<template>
  <transition name="zoomIn">
    <div
      id="photoframe"
      ref="photoframe"
      class="bg-dark"
      v-if="$store.state.photoModalState"
      @click.self="closePhotoModal"
    >
      <div id="image-container" ref="imageContainer">
        <v-zoomer>
          <img
            :src="$store.state.messages[$store.state.messageIdx].photo"
            ref="bigPhoto"
            id="big-photo"
            :alt="$store.state.messageIdx"
            v-hammer:swipe.horizontal="onSwipe"
          />
        </v-zoomer>
      </div>      
    <div id="close-icon-container">
      <img
        id="close-icon"
        src="/close-icon.jpg"
        alt="close icon"
        @click="closePhotoModal"
      />
    </div>
    </div>
  </transition>
</template>

<script>
export default {
  head() {
    return {
      title: 'Photo Message',
    }
  },
  methods: {
    closePhotoModal() {
      this.$store.commit('setPhotoModalState', false)
      this.$store.commit('setRemovedMessageId', null)
    },
    onSwipe(e) {
      if (e.type === 'swipeleft') {
        this.$store.commit('increaseMessageIdx')
      }
      if (e.type === 'swiperight') {
        this.$store.commit('decreaseMessageIdx')
      }
    }
  }
}
</script>

<style scoped>
#close-icon-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  padding: 1rem 0;
  bottom: 0;
  left: 0;
}
#close-icon {
  width: 2.1875rem;
  height: 2.1875rem;
}
#big-photo {
  width: 100%;
}
#image-container {
  position: relative;
  width: 100%;
}
#photoframe {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 500;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.zoomIn-enter-active {
  animation: zoomIn 0.3s;
}
.zoomIn-leave-active {
  animation: zoomIn 0.3s reverse;
}
@-webkit-keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
@keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
</style>