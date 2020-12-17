<template>
  <div>
    <transition-group name="backInRight" tag="div">
      <div        
        id="message"
        ref="message"
        class="row rounded mx-3 my-4"
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
        <div id="message-caption" class="col-10 px-1" key="key3">
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
      searchState: false
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
#photo {
  border-radius: 50%;
  overflow: hidden;
  width: 80%;
}
#date {
  color: #ddd;
  font-size: 0.8125rem;
}
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
.active {
  /* example */
  /* box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 0px #0ff, 0 0 14px #0ff, 0 0 0px #0ff, 0 0 41px #0ff, 0 0 22px #0ff; */
  box-shadow: 0 0 0.25rem #fff, 0 0 0.5rem #fff, 0 0 0.5rem #fff, 0 0 0px #0ff,
    0 0 0.25rem #0ff, 0 0 0px #0ff, 0 0 1rem #0ff, 0 0 0.5rem #0ff;
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
#caption-content {
  font-weight: 400;
  word-wrap: break-word;
  color: white;
}
#message {
  background: rgba(255, 255, 255, 0.05);
  /* overflow: hidden; */
  box-shadow: 0.0313rem 0.0313rem 0.125rem rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(0.3125rem);
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