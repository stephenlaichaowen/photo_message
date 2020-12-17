<template>
  <main class="bg-info">
    <Header />
    <SearchMenu />
    <Loader />
    <Messages />
    <Footer />
    <PhotoModal />
    <CameraModal v-if="cameraModalState" @hide-modal="cameraModalState=false" />    
    <CameraMenu @show-modal="cameraModalState=true" />
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100%;

  position: relative;
  overflow-y: scroll;

  /* position: absolute; */
  

  /* height: 100vh;
  width: 100vw;
  position: fixed;
  background-image: url('/bg-3.jpg');
  background-position: center;
  background-size: cover; */
}
</style>

<script>
export default {
  head() {
    return {
      title: 'Photo Message',
    }
  },
  data() {
    return {
      cameraModalState: false
    }
  },
  methods: {
    init() {
      this.$toastr.Add({
        name: 'Info Notification',
        title: 'Info',
        msg: 'App running',
        clickClose: false,
        timeout: 3000,
        progressBarValue: 0,
        position: 'toast-top-full-width',
        type: 'info',
        preventDuplicates: true,
        style: { width: '100%' },
      })
    },
  },
  mounted() {
    if ('mediaDevices' in navigator) {
      // this.init()
    } else {
      this.$toastr.Add({
        name: 'Error Notification',
        title: 'Error',
        msg: 'This app is not supported by your browser.',
        clickClose: false,
        timeout: 3000,
        progressBarValue: 0,
        position: 'toast-top-full-width',
        type: 'error',
        preventDuplicates: true,
        style: { width: '100%' },
      })
    }
  },
  created() {
    console.log(`connect to server successfully !`)
  },
}
</script>



