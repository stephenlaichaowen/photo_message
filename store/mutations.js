// import io from socket.io-client

export const mutations = {
  saveStream: (state, data) => state.stream = data,
  saveBackCameraStream: (state, data) => state.backCameraStream = data,
  saveStream: (state, data) => state.stream = data,
  savePhoto: (state, data) => state.photo = data,
  setPhotoModalState: (state, data) => state.photoModalState = data,
  setMobileState: (state, data) => state.mobileState = data,
  setLoaderState: (state, data) => state.loaderState = data,
  setCameraModalState: (state, data) => state.cameraModalState = data,
  setCameraMode: (state, data) => state.cameraMode = data,
  setCameraMenuState: (state, data) => state.cameraMenuState = data,
  clearCameraIcon: (state, data) => state.cameraIcon = data,
  setSearchMenuState: (state, data) => state.searchMenuState = data,
  setMessageMenuState: (state, data) => state.messageMenuState = data,
  getMessageId: (state, data) => state.messageId = data,
  setOptionMenuState: (state, data) => {
    state.optionMenuState = data
    console.log(`option menu state: ${state.optionMenuState}`)
  },

  setRemovedMessageId: (state, data) => state.messageIdx = data,

  showBigPhoto: (state, data) => {
    state.messageIdx = data
    state.photoModalState = true
    console.log(state.messageIdx)
  },
  increaseMessageIdx: state => {
    if (state.messageIdx >= state.messages.length - 1) {
      state.messageIdx = 0
      return
    } else {
      state.messageIdx++
    }
    console.log(state.messageIdx)
  },
  decreaseMessageIdx: state => {
    if (state.messageIdx <= 0) {
      state.messageIdx = state.messages.length - 1
      return
    } else {
      state.messageIdx--
    }
    console.log(state.messageIdx)
  },
  getPhotoMessage: state => {

    // retrieve messages from localStorage
    // state.messages = JSON.parse(localStorage.getItem('photo-message')) || []

    let db = new Localbase('db')
    db.collection('photo-message').get().then(messages => {
      state.messages = messages.reverse()
      state.loaderState = false
    }) || []
  },
  setSearchKeyword: (state, data) => {

    state.searchKeyword = data
    console.log(state.searchKeyword)

    state.messages = state.messages.filter((item) =>
      item.caption.includes(state.searchKeyword)
    )
  },
  saveMessage: (state, data) => {
    
    // this.$socket.emit('new message', data)

    // this.$socket.on('new message', message => {
    //   if (!message) { 
    //     state.message = data 
    //   }
    //   else { 
    //     state.message = message 
    //   }
    // })

    /**** save local message ****/
    state.message = data

    /**** update local messages ****/
    state.messages.unshift(state.message)

    /**** persisit local messages to indexdb ****/
    let db = new Localbase('db')
    db.collection('photo-message').add(state.message)

    // persist local messages to localStorage
    // localStorage.setItem('photo-message', JSON.stringify(state.messages))
  },

  setRemoveMessageState: (state, data) => {
    state.removeMessageState = data
  },

  removeTempMessage: (state, data) => { state.tempMessage = data},

  // removeMessage: (state, data) => {
  removeMessage: state => {

    // // send message ID (caption) to backend
    // this.$socket.emit('remove message', data)

    // // receive message ID from backend and remove item from local messages 
    // this.$socket.on('reomove message', message => {
    //   if (!message) { 
    //     state.messages = state.messages.filter(item => item.caption !== data) 

    //     let db = new Localbase('db')
    //     db.collection('photo-message').doc({ caption: data }).delete()    
    //   }
    //   else { 
    //     state.messages = state.messages.filter(item => item.caption !== message) 

    //     let db = new Localbase('db')
    //     db.collection('photo-message').doc({ caption: message }).delete()    
    //   }
    // })

    /*** delete item from local messages ***/
    // state.messages = state.messages.filter(item => item.caption !== data)
    state.messages = state.messages.filter(item => item.caption !== state.tempMessage)

    /*** delete item from indexdb ***/
    let db = new Localbase('db')
    // db.collection('photo-message').doc({ caption: data }).delete()
    db.collection('photo-message').doc({ caption: state.tempMessage }).delete()
  }
}