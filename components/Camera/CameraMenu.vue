<template>
  <transition name="slideInDown">
    <ul
      id="camera-menu"
      @click.self="closeCameraMenu"
      class="bg-dark"
      v-if="$store.state.cameraMenuState"
    >
      <li @click="openFrontCamera">Front Camera</li>
      <li v-if="mobileState" @click="openBackCamera">Back Camera</li>
    </ul>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isBackCameraExisted: false,
      videoStream: null,
      backCameraStream: null,
      frontCameraOptions: {
        video: {
          width: 600,
          height: 600,
          facingMode: 'user',
        },
        audio: false,
      },
      backCameraOptions: {
        video: {
          width: 600,
          height: 600,
          facingMode: {
            exact: 'environment',
          },
        },
        audio: false,
      },
    }
  },
  computed: {
    mobileState: {
      get() {
        return this.$store.state.mobileState
      },
    }
  },
  methods: {
    closeCameraMenu() {
      this.$store.commit('setCameraMenuState', false)
    },
    async openFrontCamera() {
      console.log(`front camera on`)
      this.$store.commit('setCameraMenuState', false)

      if (
        'mediaDevices' in navigator &&
        'getUserMedia' in navigator.mediaDevices
      ) {
        this.videoStream = await navigator.mediaDevices.getUserMedia(
          this.frontCameraOptions
        )
      }
      this.$store.commit('saveStream', this.videoStream)
      this.$store.commit('setCameraMode', true)
      // this.$emit('show-modal')
      this.$store.commit('setCameraModalState', true)
    },
    async openBackCamera() {
      console.log(`back camera on`)
      this.$store.commit('setCameraMenuState', false)

      if (
        'mediaDevices' in navigator &&
        'getUserMedia' in navigator.mediaDevices
      ) {
        this.backCameraStream = await navigator.mediaDevices.getUserMedia(
          this.backCameraOptions
        )
      }
      this.$store.commit('saveBackCameraStream', this.backCameraStream)
      this.$store.commit('setCameraMode', false)
      // this.$emit('show-modal')
      this.$store.commit('setCameraModalState', true)
    },
  }
}
</script>

<style scoped>
ul {
  background: rgba(0, 0, 0, 0.7);
}
li {
  list-style: none;
  padding: 0 0.625rem;
  color: white;
  font-weight: 400;
}
img {
  width: 2.1875rem;
  height: 2.1875rem;
  background: #00cc99;
  color: white;
}
#icon-container {
  width: 20%;
  display: flex;
  justify-content: center;
}
#camera-options {
  width: 80%;
  display: flex;
  justify-content: space-evenly;
}
#camera-menu {
  height: 3.125rem;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: -1rem;
  z-index: 800;
}
.slideInDown-enter-active {
  animation: slideInDown 0.3s;
}
.slideInDown-leave-active {
  animation: slideInDown 0.3s reverse;
}
@keyframes slideInDown {
  0% {
    /* -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0); */
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