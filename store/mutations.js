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
  
  // savePhotoSrc: (state, data) => console.log(`mutations: ${state.photoSrc}`),
  
  showBigPhoto: (state, data) => { 
    state.messageIdx = data
    console.log(state.messageIdx)
  },
  setMessageMenuState: (state, data) => state.messageMenuState = data,
  getMessageId: (state, data) => state.messageId = data,
  increaseMessageIdx: state => { 
    if (state.messageIdx >= state.messages.length-1) {
      state.messageIdx = 0
      return
    } else {
      state.messageIdx ++
    }
    console.log(state.messageIdx)
  },
  decreaseMessageIdx: state => { 
    if (state.messageIdx <= 0) { 
      state.messageIdx = state.messages.length-1
      return
    } else {
      state.messageIdx --
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
  },
  
  saveMessage: (state, data) => { 
    
    state.message = data 
    
    // update local messages
    state.messages.unshift(state.message)
    state.messagesLength = state.messages.length
    console.log(state.messagesLength)
    localStorage.setItem('message-number', state.messagesLength)
    
    // persisit local messages to indexdb
    let db = new Localbase('db')
    db.collection('photo-message').add(state.message)

    // persist local messages to localStorage
    // localStorage.setItem('photo-message', JSON.stringify(state.messages))
  },

  removeMessage: (state, data) => { 
    
    // delete item from local messages
    state.messages = state.messages.filter(item => item.id !== data)

    // delete item from indexdb
    let db = new Localbase('db')
    db.collection('photo-message').doc({ id: data }).delete()
  }
  
}