<template>
  <div>
    <transition-group name="backInRight" tag="div">
      <div
        id="message"
        ref="message"
        class="row rounded mx-3 my-3"
        v-for="(item, idx) in filteredMessages"
        :key="item.caption"
        v-hammer:swipe.right="() => removeMessage(item.id)"
      >
        <div id="image-container" class="col-2 p-1" key="key1">
          <img
            :src="item.photo"
            key="key2"
            id="photo"
            class="w-100 rounded"
            alt="thumb"
            :class="{ active: idx == messageIdx }"
            @click="showPhotoModal(idx)"
          />
        </div>
        <div id="message-caption" class="col-10 pl-2" key="key3">
          <div id="caption-content" class="rounded text-light">
            {{ item.caption }}
          </div>
          <div id="date">
            {{ item.id.toLocaleString() }}
          </div>
        </div>

        <!-- <div id="menu-item" class="col-1"> -->
          <!-- <i id="menu-burger" class="fas fa-ellipsis-h"></i> -->
          <!-- <i id="menu-burger" class="fas fa-expand"></i>
          <span class="delete" @click="removeMessage(item.id)"></span> -->
        <!-- </div> -->
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
      tempMessages: [],
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
    filteredMessages: {
      get() {
        return this.$store.getters.messages.filter((item) =>
          item.caption.includes(this.searchKeyword)
        )
      },
    },
  },
  methods: {
    onSwipeLeft() {
      alert('you swipe left')
    },
    removeMessage(id) {
      this.$store.commit('removeMessage', id)
    },
    setMessageMenu(idx) {
      this.$store.commit('setMessageMenuState', true)
    },
    showPhotoModal(idx) {
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
#menu-icon {
  color: rgba(255, 255, 255, 0.3);
}
#menu {
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  align-items: flex-start;
}
#image-container {
  padding: 0;
}
.active {  
  /* box-shadow: 0 0 0.0625rem #fff, 0 0 0.125rem #fff, 0 0 0.125rem #fff, 0 0 0px #0ff, 0 0 0.0625rem #0ff, 0 0 0px #0ff, 0 0 0.25rem #0ff, 0 0 0.125rem #0ff; */
  box-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 4px #fff, 0 0 0px #0ff, 0 0 2px #0ff, 0 0 0px #0ff, 0 0 0.5rem #0ff, 0 0 0.25rem #0ff;
}
#photo {
  border-radius: 50%;
  overflow: hidden;
}
#menu-item:hover .delete {
  width: 1.875rem;
  height: 1.875rem;
  opacity: 1;
}
#menu-item:hover .delete:after {
  transform: translate(-50%, -50%) scale(1);
}
#menu-item .delete:after {
  position: absolute;
  content: '';
  width: 1rem;
  height: 1rem;
  top: 50%;
  left: 50%;
  background-image: url('https://nourabusoud.github.io/vue-todo-list/images/trash.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transform: translate(-50%, -50%) scale(0.5);
  transition: all ease-in 0.25s;
}
#menu-item .delete {
  border-radius: 50%;
  position: absolute;
  height: 50%;
  top: 50%;
  bottom: 0;
  right: 0;
  cursor: pointer;
  opacity: 0;
  width: 0;
  background-color: #f56468;
  color: #fff;
  transition: all ease-in 0.25s;
}
#date {
  /* padding: 0 0.5rem; */
  color: #ddd;
  font-size: 0.8125rem;
  /* border: 1px solid green; */
}
#caption-content {
  /* border: 1px solid yellow; */
  /* padding: 0 0.5rem; */
  font-weight: 400;
  word-wrap: break-word;
  color: white;
  /* border: 1px solid white; */
}
#message {
  background: rgba(255, 255, 255, 0.05);
  overflow: hidden;
  box-shadow: .5px .5px 2px rgba(0, 0, 0, .2);
  backdrop-filter: blur(0.3125rem);  
  /* border: 1px solid red; */
}
#message-caption {
  display: flex;
  flex-direction: column;
  padding: 0;
  /* border: 1px solid red; */
}
#menu-edit {
  margin-left: 0.625rem;
}
#menu-trash {
  margin-left: auto;
}
#menu-item-container {
  margin-top: 0.3125rem;
  display: flex;
}
#menu-item {
  padding: 0;
  display: flex;
  justify-content: center;
}
#menu-burger {
  color: rgba(255, 255, 255, 0.3);
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