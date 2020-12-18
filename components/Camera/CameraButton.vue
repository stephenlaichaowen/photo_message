<template>
  <div id="camera-button">
    <!-- <img src="https://www.iconarchive.com/download/i7886/hopstarter/soft-scraps/Button-Blank-Red.ico" alt="camera-button"> -->
    <!-- <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-blue-camera-button-cirlce-png-image_4255760.jpg" alt="camera-button"> -->
    <!-- <img 
      src="https://www.freeiconspng.com/thumbs/photography-icon-png/camera-icon-circle-21.png" alt="camera-button"
      @click="openFrontCamera"
    > -->
    <img 
      src="https://www.freeiconspng.com/thumbs/web-camera-icon/web-camera-icon-24.png"
      @click="openFrontCamera"
    >
  </div>
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
  methods: {
     async openFrontCamera() {
      console.log(`front camera on`)
      // this.$store.commit('setCameraMenuState', false)

      if (
        'mediaDevices' in navigator &&
        'getUserMedia' in navigator.mediaDevices
      ) {
        this.videoStream = await navigator.mediaDevices.getUserMedia(
          this.frontCameraOptions
        )
      }
      // this.$emit('show-modal', true)
      this.$emit('show-modal')
      this.$store.commit('saveStream', this.videoStream)
      this.$store.commit('setCameraMode', true)
    }
  },
}
</script>

<style scoped>
img {
  width: 100%;
}
#camera-button {
  position: fixed;
  right: 2.5rem;
  bottom: 2.5rem;
  width: 3.125rem;
  height: 3.125rem;
  z-index: 250;
}
</style>