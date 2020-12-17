<template>
<div id="messages" class="bg-dark">
  <transition-group name="backInRight" tag="div">
    <div
      id="message"
      class="row rounded pl-3 pt-2"
      v-for="(item, idx) in messages"
      :key="item.caption"
      v-hammer:swipe.right="() => removeMessage(item.caption)"
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
      <div id="message-caption" class="col-10 px-2" key="key3">
        <div id="caption-content" class="rounded text-light">
          {{ item.caption }}
        </div>
        <div id="date">
          {{ item.id.toLocaleString() }}
        </div>
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

    // filteredMessages: {
    //   get() {
    //     return this.$store.getters.filteredMessages
    //   },
    // },
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
#messages {
  position: fixed;
  padding: 0 0.5rem;
  top: 3.125rem;
  bottom: 3.125rem;
  height: calc(100vh - 6.25rem);
  z-index: 200;
  /* padding: 3.125rem 0; */
  overflow-y: scroll;   
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
#message {
  position: relative;
  /* background: rgba(255, 255, 255, 0.05); */
  /* overflow-y: scroll; */
  /* overflow: hidden; */
  /* box-shadow: 0.0313rem 0.0313rem 0.125rem rgba(0, 0, 0, 0.2); */
  /* backdrop-filter: blur(0.3125rem); */
  /* border-radius: 2.5rem; */
}
#message-caption {
  display: flex;
  flex-direction: column;
  padding: 0;
}
#menu-edit {
  margin-left: 0.625rem;
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