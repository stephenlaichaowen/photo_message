<template>
  <main>
    <!-- <Header />
    <SearchMenu /> -->
    <Loader />
    <!-- <MessageList />
    <Footer />
    <PhotoModal />
    <CameraModal v-if="cameraModalState" @hide-modal="cameraModalState=false" />    
    <CameraMenu @show-modal="cameraModalState=true" /> -->
  </main>
</template>

<script>
// import io from 'socket.io-client'

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
    // this.socket.emit('to-server', 'hi, server')
    // this.socket.on('from-server', data => {
    //   console.log(data)
    // })
  },
  created() {
    // this.socket = io('http://localhost:5000')
    // this.socket = io('https://photo-message-socketio-final.glitch.me/')
    // this.socket = io('https://photo-message-socketio.herokuapp.com')
    console.log(`connect to server successfully !`)
  },
}
</script>

<style scoped>
main {
  height: 100vh;
  position: relative;
  background: #161623;
}
main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
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
  width: 100%;
  height: 100%;
  background: linear-gradient(#2196f3, #e91e63);
  clip-path: circle(20% at 10% 10%);
}
</style>

