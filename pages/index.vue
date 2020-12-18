<template>
  <!-- <main class="bg-info"> -->
  <main>
    <Header />
    <Messages />
    <Footer />

    <SearchMenu />
    <Loader />
    <PhotoModal />
    <CameraModal v-if="cameraModalState" @hide-modal="cameraModalState=false" />    
    <CameraMenu @show-modal="cameraModalState=true" />
  </main>
</template>

<style>
main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  /* background-image: url('https://image-cdn.hypb.st/https%3A%2F%2Fhk.hypebeast.com%2Ffiles%2F2020%2F07%2Fmonster-hunter-movie-delayed-2021-milla-jovovich-1.jpg?q=75&w=800&cbr=1&fit=max'); */
  /* background-image: url('https://images.unsplash.com/photo-1607960402358-a5ceb04ebeb3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGZyaWVuZHNoaXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'); */
  background-image: url('https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
  background-position: center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
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



