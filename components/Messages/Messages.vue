<template>
  <div id="messages">
    <transition-group name="backInRight" tag="div">
      <div
        id="message"
        class="row rounded pl-4 pr-3 py-1"
        v-for="(item, idx) in $store.state.messages"
        :key="item.caption"
      >
        <div id="image-container" class="col-2 p-1" key="key1">
          <img
            :src="item.photo"
            key="key2"
            id="photo"
            alt="thumb"
            :class="{ active: idx == $store.state.messageIdx }"
            @click="$store.commit('showBigPhoto', idx)"
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
        <div id="option">
          <img
            @click="removeMessage(item.caption, idx)"
            src="/option-menu-icon.png"
            alt="arrow"
          />
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemSelectedState: false,
      optionMenuState: false
    }
  },
  methods: {
    selectItem(idx) {
      this.itemSelectedState = !this.itemSelectedState
      if (this.itemSelectedState) this.$store.commit('setRemovedMessageId', idx)
      if (!this.itemSelectedState) this.$store.commit('setRemovedMessageId', null)
    },
    removeMessage(item, idx) {
      this.$store.commit('removeTempMessage', item)

      this.$store.state.optionMenuState = !this.$store.state.optionMenuState

      if (this.$store.state.optionMenuState) {
        this.$store.commit('setOptionMenuState', true)
        this.$store.commit('setRemovedMessageId', idx)
      }  
      if (!this.$store.state.optionMenuState) {
        this.$store.commit('setOptionMenuState', false)
        this.$store.commit('setRemovedMessageId', null)
      }
    },
  },
  mounted() {
    this.$store.commit('getPhotoMessage')
  },
}
</script>

<style scoped>
#option img {
  width: 1.25rem;
  height: 1.875rem;
  /* border: 1px solid yellow; */
}
#message {
  position: relative;
}
#messages {
  position: fixed;
  top: 3.125rem;
  left: 50%;
  transform: translateX(-50%);
  height: calc(100vh - 3.125rem);
  z-index: 200;
  overflow-y: scroll;
  overflow-x: hidden;
  max-width: 800px;
  width: 100%;
  padding: 0.25rem;
  z-index: 200;
  backdrop-filter: blur(12px);
}
#photo {
  border-radius: 50%;
  overflow: hidden;
  /* width: 100%; */
  width: 2.875rem;
  height: 2.875rem;
}
#date {
  color: #ddd;
  font-size: 0.8125rem;
}
.active {
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