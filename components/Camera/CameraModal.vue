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
            ref="caption"
            v-model="caption"
            placeholder="Image Caption..."
            maxlength="120"
            class="p-2 bg-dark rounded align-middle pr-5"
          ></textarea>
          <img
            id="paperplane-icon"
            src="/paperplane-icon-final.png"
            alt="paper plane icon"
            @click="sendMessage"
          />
        </div>
        <div id="icon-group" class="my-3">
          <img
            id="thumbnail-icon"
            :src="
              $store.state.cameraIcon
                ? $store.state.photo
                : '/photoicon-final.png'
            "
          />
          <img
            id="capture-icon"
            :src="captureIcon"
            @click="takePhoto"
            alt="capture icon"
          />
          <img
            id="camera-switch-icon"
            src="/cameraswitch-icon.png"
            alt="camera-swtich-icon"
            @click="toggleCamera"
          />
        </div>
        <div id="close-icon-container">
          <img
            id="close-icon"
            src="/close-icon-white.png"
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
      videoStream: null,
      backCameraStream: null,
      isFrontCamera: true,
      caption: null,
      // isAutofocus: false,
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
  methods: {
    sendMessage() {
      if (!this.$store.state.photo || !this.caption) {
        this.$toastr.Add({
          name: 'Warning Notification',
          title: 'Warning',
          msg: 'Photo & Caption Required.',
          clickClose: false,
          timeout: 3000,
          progressBarValue: 100,
          position: 'toast-top-full-width',
          type: 'warning',
          preventDuplicates: true,
          style: { width: '100%' },
        })
        return
      }

      this.message = {
        id: new Date(),
        photo: this.$store.state.photo,
        caption: this.caption,
      }
      this.$store.commit('saveMessage', this.message)
      this.closeCameraModal()    

      this.caption = ''
      // this.$store.commit('clearCameraIcon', false)
    },
    async toggleCamera() {
      if (!this.$store.state.mobileState) return

      this.isFrontCamera = !this.isFrontCamera
      this.turnOffCamera()

      if (
        'mediaDevices' in navigator &&
        'getUserMedia' in navigator.mediaDevices
      ) {
        if (this.isFrontCamera) {
          this.videoStream = await navigator.mediaDevices.getUserMedia(
            this.frontCameraOptions
          )

          this.$store.commit('saveStream', this.videoStream)
          this.$store.commit('setCameraMode', true)
        }
        if (!this.isFrontCamera) {
          this.backCameraStream = await navigator.mediaDevices.getUserMedia(
            this.backCameraOptions
          )

          this.$store.commit('saveBackCameraStream', this.backCameraStream)
          this.$store.commit('setCameraMode', false)
        }
      }
    },
    closeCameraModal() {
      this.$store.commit('setCameraModalState', false)
      this.turnOffCamera()
      this.$refs.caption.style.outline = 'none'
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
      // this.isAutofocus = true
      // setTimeout(() => {
        this.$refs.caption.focus()
      // })
      console.log(`autofocus: ${this.isAutofocus}`)
    },
    turnOffCamera() {
      this.$refs.camera.pause()

      if (this.$store.state.cameraMode)
        this.$store.state.stream.getTracks()[0].stop()
      if (!this.$store.state.cameraMode)
        this.$store.state.backCameraStream.getTracks()[0].stop()
    },
  },
  mounted() {
    console.log(`autofocus: ${this.isAutofocus}`)
  }
}
</script>

<style scoped>
#caption-input-container {
  display: flex;
  justify-content: center;
}
#paperplane-icon {
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 3.125rem;
}
#caption::placeholder {
  color: white;
}
#caption {
  resize: none;
  border: none;
  color: white;
  width: 18.125rem;
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
  width: 100%;
  /* width: 22.5rem; */
  height: 18rem;
}
#modal-container {
  width: 100vw;
  /* width: 22.5rem; */
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