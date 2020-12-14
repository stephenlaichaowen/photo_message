<template>
  <transition name="fadeInUp">
    <div id="mymodal" class="bg-dark" @click.self="closeCameraModal">
      <div id="modal-container">
          <video id="player" ref="camera" autoplay class="w-100"></video>
        <div id="icon-group">
          <!-- <button
            id="capture"
            @click="takePhoto"
            class="fas fa-circle fa-2x rounded-circle bg-white text-danger my-3"
          ></button> -->
          <button
            id="capture"
            @click="takePhoto"
            class="my-3"
          ></button>
          <!-- <i
            id="icon-close"
            @click="closeCameraModal"
            class="fas fa-times text-light"
          ></i> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      photo: null,
      showVideo: false
    }
  },
  computed: {
    cameraMode: {
      get() {
        return this.$store.getters.cameraMode
      },
    },
    cameraModalState: {
      get() {
        return this.$store.getters.cameraModalState
      },
    },
    videoStream: {
      get() {
        return this.$store.getters.stream
      },
    },
    backCameraStream: {
      get() {
        return this.$store.getters.backCameraStream
      },
    },
  },
  methods: {
    closeCameraModal() {
      this.$emit('hide-modal', false)
      this.turnOffCamera()
    },
    takePhoto() {
      let canvas = document.createElement('canvas')
      canvas.setAttribute('width', 600)
      canvas.setAttribute('height', 600)

      let context = canvas.getContext('2d')
      context.drawImage(this.$refs.camera, 0, 0, canvas.width, canvas.height)
      this.photo = context.canvas.toDataURL()
      this.$store.commit('savePhoto', this.photo)
      this.$store.commit('clearCameraIcon', true)

      this.turnOffCamera()
      console.log('camera off')
      this.$emit('hide-modal', false)
    },
    turnOffCamera() {
      this.$refs.camera.pause()

      if (this.cameraMode) this.videoStream.getTracks()[0].stop()
      if (!this.cameraMode) this.backCameraStream.getTracks()[0].stop()
    },
  },
  mounted() {
    if (this.cameraMode) this.$refs.camera.srcObject = this.videoStream
    if (!this.cameraMode) this.$refs.camera.srcObject = this.backCameraStream
  }
}
</script>

<style scoped>
#capture {
  width: 2.8125rem;
  height: 2.8125rem;
  border-radius: 50%;
  background: url('https://cdn.pixabay.com/photo/2015/07/18/08/02/button-850101_640.png');
  background-position: center;
  background-size: cover;
}
#icon-group {
  display: flex;
  justify-content: center;
  position: relative;
}
#icon-close {
  position: absolute;
  right: 1rem;
  top: 1rem;
}
#player {
  width: 100vw;
}
#modal-container {
  width: 100vw;
}
#mymodal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  align-items: center;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
.fadeInUp-enter-active {
  animation: fadeInUp 0.3s;
}
.fadeInUp-leave-active {
  animation: fadeInUp 0.3s reverse;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>