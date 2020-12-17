<template>
  <transition name="zoomIn">
    <div
      id="photoframe"
      ref="photoframe"
      class="bg-dark"
      v-if="photoModalState"
      @click.self="closePhotoModal"
    >
      <div id="image-container" ref="imageContainer">
        <v-zoomer>
          <img
            :src="filteredMessages[messageIdx].photo"
            ref="bigPhoto"
            id="big-photo"
            :alt="messageIdx"
            v-hammer:swipe.horizontal="onSwipe"
          />
        </v-zoomer>
        <!-- <i
          @click="closePhotoModal"
          id="icon-close-right"
          class="fas fa-chevron-right fa-2x icon-arrow"
        ></i>
        <i
          @click="closePhotoModal"
          id="icon-close-left"
          class="fas fa-chevron-left fa-2x icon-arrow"
        ></i>
        <i
          @click="moveLeft"
          id="arrow-left"
          class="fas fa-chevron-left fa-2x icon-arrow"
        ></i>
        <i
          @click="moveRight"
          id="arrow-right"
          class="fas fa-chevron-right fa-2x icon-arrow"
        ></i> -->
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
  data() {
    return {
      photo: null,
      zoomState: 1,
    }
  },
  computed: {
    messageIdx: {
      get() {
        return this.$store.state.messageIdx
      },
    },
    filteredMessages: {
      get() {
        return this.$store.getters.filteredMessages
      },
    },
    photoSrc: {
      get() {
        return this.$store.getters.bigPhoto
      },
    },
    photoModalState: {
      get() {
        return this.$store.getters.photoModalState
      },
    },
  },
  methods: {
    onSwipe(e) {
      if (e.type === 'swipeleft') {
        this.moveRight()
      }
      if (e.type === 'swiperight') {
        this.moveLeft()
      }
    },
    moveLeft() {
      this.$store.commit('decreaseMessageIdx')
    },
    moveRight() {
      this.$store.commit('increaseMessageIdx')
    },
    zoomOut() {
      if (this.zoomState <= 1) {
        this.zoomState = 1
      } else {
        this.zoomState--
        this.$refs.bigPhoto.style.transform = `translate(0, 0) scale(${this.zoomState})`
      }
    },
    zoomIn() {
      if (this.zoomState >= 2) {
        this.zoomState = 2
      } else {
        this.zoomState++
        this.$refs.bigPhoto.style.transform = `translate(0, 0) scale(${this.zoomState})`
      }
    },
    closePhotoModal() {
      console.log(`close photo modal`)
      this.$store.commit('setPhotoModalState', false)
    },
  },
  mounted() {},
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