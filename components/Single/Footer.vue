<template>
  <div v-if="!loaderState" id="footer" class="container-fluid">
    <div id="container" class="toolbar row bg-light">
      <div class="col py-2 d-flex">
        <!-- <button
          id="camera"
          @click="showCameraModal"
          :class="{ withphoto: cameraIcon }"
          :style="{ backgroundImage: cameraIcon ? `url('${photo}')` : '' }"
          class="fas fa-camera fa-2x ml-0 px-1 mr-2 text-dark bg-light"
        >
        </button> -->
        <i class="bi bi-camera-fill"></i>
        <input
          id="caption"         
          v-model="caption"
          @keyup.enter="sendMessage"
          type="text"
          maxlength="100"
          placeholder="Image Caption..."
          class="flex-grow-1 w-100 align-middle pr-5"
        >
        <a
          id="send"
          @click.prevent="sendMessage"
          class="fas fa-paper-plane text-dark position-absolute"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  data() {
    return {
      socket: null,
      caption: null,
      videoStream: null,
      modalState: true,
      messageArray: [],
      message: {},
      options: {
        video: {
          width: 600,
          height: 600,
        },
        audio: false,
      },
    }
  },
  computed: {
    loaderState: {
      get() {
        return this.$store.getters.loaderState
      },
    },
    cameraIcon: {
      get() {
        return this.$store.getters.cameraIcon
      },
    },
    photo: {
      get() {
        return this.$store.getters.photo
      },
    },
  },
  methods: {
    async showCameraModal() {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)      
      if (isMobile) this.$store.commit('setMobileState', true)
      if (!isMobile) this.$store.commit('setMobileState', false)

      console.log(`camera menu opened`)
      this.$store.commit('setCameraMenuState', true)
      
      this.socket = io('http://localhost:5000')
      this.socket.emit('to-server', 'hi, server')
      this.socket.on('from-server', data => {
        console.log(data)
      })
    },
    sendMessage() {
      if (!this.photo || !this.caption) {
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
        photo: this.photo,
        caption: this.caption,
      }
      this.$store.commit('saveMessage', this.message)

      this.caption = ''
      this.$store.commit('clearCameraIcon', false)
    }
  }
}
</script>

<style scoped>
#send {
  right: 1.875rem;
  top: 1.125rem;
  text-decoration: none;
}
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 300;
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
}
#caption::placeholder {
  font-size: 0.25rem;
}
#caption {
  resize: none;
  outline: none;
  padding: 0.3125rem;
  border-radius: 0.25rem;
  border: none;
}
#caption::-webkit-input-placeholder {
  font-size: 1rem;
}
</style>