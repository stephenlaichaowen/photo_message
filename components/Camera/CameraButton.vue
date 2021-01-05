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
      frontCameraOptions: {
        video: {
          width: 600,
          height: 600,
          facingMode: 'user',
        },
        audio: false,
      }      
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
      }
      this.$store.commit('saveStream', this.videoStream)
      this.$store.commit('setCameraMode', true)
      // this.$store.commit('setMobileState', false)
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
  width: 3.4375rem;
  height: 3.4375rem;
  z-index: 500;
  overflow: hidden;
}
</style>