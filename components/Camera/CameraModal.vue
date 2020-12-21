<template>
  <transition name="fadeInLeft" v-if="$store.state.cameraModalState">
    <div id="mymodal">
      <div id="modal-container">
        <video
          id="player"
          ref="camera"
          autoplay
          class="w-100"
          :srcObject.prop="
            $store.state.cameraMode
              ? $store.state.stream
              : $store.state.backCameraStream
          "
        ></video>
        <div id="caption-input-container" class="p-3">
          <textarea
            id="caption"
            placeholder="Image Caption..."
            maxlength="120"
            class="p-2 w-100 bg-dark rounded align-middle pr-5"
          ></textarea>
          <img id="paperplane-icon" src="/paperplane-icon-final.png" alt="paper plane icon">
        </div>
        <div id="icon-group" class="my-3">
          <img
            id="thumbnail-icon"
            :src="$store.state.cameraIcon ? $store.state.photo : '/photo-icon.png'"
          >
          <img
            id="capture-icon"
            :src="captureIcon"
            @click="takePhoto"
            alt="capture icon"
          />
          <img
            id="camera-switch-icon"
            src="/cameraswitch-icon-final.png"
            alt="camera-swtich-icon"
            @click="toggleCamera"
          />
        </div>        
        <div id="close-icon-container">
          <img
            id="close-icon"
            src="/close-icon-final.png"
            alt="close icon"
            @click="closeCameraModal"
          />
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
      captureIcon: '/capture-icon.png',
    }
  },
  methods: {
    toggleCamera() {

    },
    closeCameraModal() {
      this.$store.commit('setCameraModalState', false)
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
    },
    turnOffCamera() {
      this.$refs.camera.pause()

      if (this.$store.state.cameraMode)
        this.$store.state.stream.getTracks()[0].stop()
      if (!this.$store.state.cameraMode)
        this.$store.state.backCameraStream.getTracks()[0].stop()
    },
  },
}
</script>

<style scoped>
#paperplane-icon {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 2rem;
}
#caption::placeholder {
  color: white;
}
#caption {
  resize: none;
  border: none;
}
#caption-input-container {
  margin-top: -0.4375rem;
  position: relative;  
}
#close-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  /* position: fixed;
  left: 0;
  bottom: 0;
  width: 100%; */
  /* margin-top: 2rem; */
  padding: 3rem 0 1rem 0;
  /* height: 3.125em; */
}
.withphoto {
  color: transparent !important;
  background-size: cover;
  background-position: center;
}
#camera {
  outline: none;
  border-radius: 0.25rem;
  border: none;
  background: url('/button-icon.png');
  background-position: center;
  background-size: cover;
  width: 2.75rem;
  height: 2.125rem;
}
#thumbnail-icon {
  border-radius: 50%;
  overflow: hidden;
  /* border: 1px solid red; */
}
#thumbnail-icon,
#camera-switch-icon {
  width: 2.1875rem;
  height: 2.1875rem;
}
#close-icon {
  width: 2.1875rem;
  height: 2.1875rem;
}
#capture-icon {
  width: 3.75rem;
  height: 3.75rem;
}
#icon-group {
  /* border: 1px solid yellow; */
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  /* flex-direction: column; */
  align-items: center;
  background: #000;
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
.fadeInLeft-enter-active {
  animation: fadeInLeft 0.3s;
}
.fadeInLeft-leave-active {
  animation: fadeInLeft 0.3s reverse;
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