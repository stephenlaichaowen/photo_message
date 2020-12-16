<template>
  <main>
    <Header />
    <SearchMenu />
    <Loader />
    <!-- <MessageList /> -->
    <Message />
    <Footer />
    <PhotoModal />
    <CameraModal v-if="cameraModalState" @hide-modal="cameraModalState=false" />    
    <CameraMenu @show-modal="cameraModalState=true" />
  </main>
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

<style scoped>
main {
  height: 100vh;
  width: 100vw;
  position: relative;
  /* background: #161623; */
  background-image: url('/bg-cosmos.jpg');
  background-position: center;
  background-size: cover;
  /* filter: grayscale(80%); */
}
/* main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  background: linear-gradient(#f00, #f0f);
  clip-path: circle(30% at right 70%);
}
main:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  background: linear-gradient(#2196f3, #e91e63);
  clip-path: circle(20% at 10% 10%);
} */
</style>

