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
#icon-close-right {
  top: 1rem;
  right: 1rem;
}
#icon-close-left {
  top: 1rem;
  left: 1rem;
}
#arrow-left {
  left: 0.9375rem;
}
#arrow-right {
  right: 0.9375rem;
}
.icon-arrow {
  position: absolute;
  /* top: 50%;
  transform: translateY(-50%); */
  color: rgba(255, 255, 255, 0.5);
}
.icon-zoom {
  padding: 0.2rem 0.5rem;
  color: rgba(255, 255, 255, 0.5);
}
/* #zoom-icon {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
} */
#icon-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: rgba(255, 255, 255, 0.5);
}
/* #big-photo:hover {
  transform: scale(2);
} */
#big-photo {
  width: 100%;
}
#image-container {
  position: relative;
  width: 100%;
  /* height: 100%; */
  /* overflow: hidden; */
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