<template>
<div id="messages" class="bg-info">
  <transition-group name="backInRight" tag="div">
    <!-- <div>
      v-hammer:swipe.right="() => removeMessage(item.caption)"      
    </div> -->
    <div
      id="message"
      class="row rounded pl-4 pr-3 pb-1"
      v-for="(item, idx) in filteredMessages"
      :key="item.caption"
    >
      <div id="image-container" class="col-2 p-1" key="key1">
        <img
          :src="item.photo"
          key="key2"
          id="photo"
          alt="thumb"
          :class="{ active: idx == messageIdx }"
          @click="showPhotoModal(idx)"
        />
      </div>
      <div id="message-caption" class="col-9 px-2" key="key3">
        <div id="caption-content" class="rounded text-light">
          {{ item.caption }}
        </div>
        <div id="date">
          {{ item.id.toLocaleString() }}
        </div>
      </div>
      <div id="option" @click="removeMessage(item.caption)">
        <!-- <img src="https://cdn0.iconfinder.com/data/icons/round-action-bar/48/more-512.png" alt="option"> -->
        <!-- <img src="https://lh3.googleusercontent.com/proxy/sKraN151Y1n960Q3Iqlg6XKbN8wNKICgWgZBfu4uJGShN5UpdRSsikLa_V7IVzrUqX_qm4VMM1azzRsrKxy60rNmnVnkxp_4LUmxGOvUQjm_5tfdcrRSZzSFi-nPuVyqDFmkU-QxnJUQdcTzxGvktUtjrGKX8ej8OegbbWki5VSjI5-Xn8GTTdtt0NQV9AOhHK9gZUQZ_KhnEuRlQ2i7tWgi" alt="option"> -->
        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/right-drection-arrow-1179729.png" alt="arrow">
      </div>
    </div>
  </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photoSrc: null,
      messageMenuState: false,
      tempMessages: null,
      searchState: false,
    }
  },
  computed: {
    messageIdx: {
      get() {
        return this.$store.state.messageIdx
      },
    },
    searchKeyword: {
      get() {
        return this.$store.state.searchKeyword
      },
    },

    messages: {
      get() {
        return this.$store.getters.messages
      },
    },

    filteredMessages: {
      get() {
        return this.$store.getters.messages.filter((item) => item.caption.includes(this.searchKeyword))
      },
    },
  },
  methods: {
    onSwipeLeft() {
      alert('you swipe left')
    },
    removeMessage(id) {
      console.log(`photo message id: ${id}`)
      this.$store.commit('removeMessage', id)
    },
    setMessageMenu(idx) {
      this.$store.commit('setMessageMenuState', true)
    },
    showPhotoModal(idx) {
      // alert(`photo index: ${idx}`)
      // console.log(`photo index: ${idx}`)
      this.$store.commit('showBigPhoto', idx)
      this.$store.commit('setPhotoModalState', true)
    },
  },
  mounted() {
    this.$store.commit('getPhotoMessage')
  },
}
</script>

<style scoped>
#option img {
  width: 15px;
  height: 15px;
  /* background-color: rgba(255, 255, 255, 0.5); */
}
/* #option {
  padding-top: 5px;
} */
#messages {
  position: absolute;
  top: 3.125rem;
  bottom: 3.125rem;
  height: calc(100vh - 6.25rem); 
  z-index: 200;
  overflow-y: scroll;   
  overflow-x: hidden;
  width: 100vw;
  padding: 0.5rem 0.25rem 0 0.25rem;
}
#photo {
  border-radius: 50%;
  overflow: hidden;
  width: 100%;
}
#date {
  color: #ddd;
  font-size: 0.8125rem;
}
.active {
  /* example */
  /* box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 0px #0ff, 0 0 14px #0ff, 0 0 0px #0ff, 0 0 41px #0ff, 0 0 22px #0ff; */
  box-shadow: 0 0 0.25rem #fff, 0 0 0.5rem #fff, 0 0 0.5rem #fff, 0 0 0px #0ff,
    0 0 0.25rem #0ff, 0 0 0px #0ff, 0 0 1rem #0ff, 0 0 0.5rem #0ff;
}
#caption-content {
  font-weight: 400;
  word-wrap: break-word;
  color: white;
}
#message-caption {
  display: flex;
  flex-direction: column;
  padding: 0;
}
.backInRight-enter-active {
  animation: backInRight 0.3s;
}
.backInRight-leave-active {
  animation: backInRight 0.3s reverse;
}
@keyframes backInRight {
  0% {
    -webkit-transform: translateX(125rem) scale(0.7);
    transform: translateX(125rem) scale(0.7);
    opacity: 0.7;
  }
  80% {
    -webkit-transform: translateX(0) scale(0.7);
    transform: translateX(0) scale(0.7);
    opacity: 0.7;
  }
  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
</style>