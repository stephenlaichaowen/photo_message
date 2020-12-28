<template>
  <div v-if="!$store.state.loaderState" id="camera-button">
    <img :src="imgSrc" @click="openCameraModal" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: '/camera-icon.png',
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
    async openCameraModal() {
      console.log(`front camera on`)

      if (
        'mediaDevices' in navigator &&
        'getUserMedia' in navigator.mediaDevices
      ) {
        this.videoStream = await navigator.mediaDevices.getUserMedia(this.frontCameraOptions)
        
        // this.backCameraStream = await navigator.mediaDevices.getUserMedia(this.backCameraOptions)
      }
      this.$store.commit('saveStream', this.videoStream)
      this.$store.commit('setCameraMode', true)
      
      // this.$store.commit('saveBackCameraStream', this.backCameraStream)
      // this.$store.commit('setCameraMode', false)

      this.$store.commit('setCameraModalState', true)
    },
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
  z-index: 300;
  overflow: hidden;
}
</style>