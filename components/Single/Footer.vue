<template>
  <div v-if="!$store.state.loaderState" id="footer" class="container-fluid">
    <div id="container" class="toolbar row bg-dark">
      <div class="col py-2 d-flex">
        <button
          id="camera"
          @click="$store.commit('setCameraMenuState', true)"
          :class="{ withphoto: $store.state.cameraIcon }"
          class="ml-0 px-1 mr-2 text-dark bg-dark"
          :style="{ backgroundImage: $store.state.cameraIcon ? `url('${$store.state.photo}')` : '' }"
        ></button>
        <input
          id="caption"
          v-model="caption"
          @keyup.enter="sendMessage"
          type="text"
          maxlength="60"
          placeholder="Please type short messages..."
          class="flex-grow-1 w-100 align-middle pr-5"
        />
        <img
          :src="imgSrc"
          alt="paper plane"
          id="send"
          @click.prevent="sendMessage"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caption: null,
      imgSrc: 'https://image.flaticon.com/icons/svg/941/941565.svg'
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

      this.caption = ''
      this.$store.commit('clearCameraIcon', false)
    },
  },
}
</script>

<style scoped>
#send {
  position: absolute;
  right: 1.5625rem;
  top: 0.9375rem;
  text-decoration: none;
  width: 1.375rem;
  height: 1.375rem;
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
  background: url('/camera-icon.png');
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