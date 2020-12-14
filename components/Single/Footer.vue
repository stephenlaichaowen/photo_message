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
        ></button> -->
        <!-- <div id="camera-container"> -->
          <button
            id="camera"
            @click="showCameraModal"
            :class="{ withphoto: cameraIcon }"
            class="ml-0 px-1 mr-2 text-dark bg-light"
            :style="{ backgroundImage: cameraIcon ? `url('${photo}')` : '' }"
          ></button>
        <!-- </div> -->
        <input
          id="caption"
          v-model="caption"
          @keyup.enter="sendMessage"
          type="text"
          maxlength="70"
          placeholder="Image Caption..."
          class="flex-grow-1 w-100 align-middle pr-5"
        />
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.6U0p5YSqVZC2IyvkPRfyTwD6D6&pid=Api&P=0&w=300&h=300"
          alt="paper plane"
          id="send"
          @click.prevent="sendMessage"
        />
        <!-- <a
          id="send"
          @click.prevent="sendMessage"
          class="fas fa-paper-plane text-dark position-absolute"
        ></a> -->
      </div>
    </div>
  </div>
</template>

<script>
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
    showCameraModal() {
      console.log(`camera menu opened`)
      this.$store.commit('setCameraMenuState', true)
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
    },
  },
}
</script>

<style scoped>
#send {
  position: absolute;
  right: 1.875rem;
  top: 0.9375rem;
  text-decoration: none;
  width: 20px;
  height: 20px;
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
  /* border: 1px solid red; */
  outline: none;
  border-radius: 0.25rem;
  border: none;
  /* background: url('https://www.searchpng.com/wp-content/uploads/2019/02/Camera-Icon-PNG.png'); */
  /* background: url('https://maxcdn.icons8.com/Share/icon/p1em/Photo_Video/camera1600.png'); */
  background: url('https://coralbuttons.files.wordpress.com/2014/11/camera-icon.png');
  background-position: center;
  background-size: cover;
  width: 2.75rem;
  height: 2.125rem;
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