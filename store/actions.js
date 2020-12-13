export const actions = {

  setMobileState({ commit }, data) {
    commit('setMobileState', data)
  },

  setPhotoModalState({ commit }, data) {
    commit('setPhotoModalState', data)
  },

  setCameraModalState({ commit }, data) {
    commit('setCameraModalState', data)
  },

  setCameraMode({ commit }, data) {
    commit('setCameraMode', data)
  },

  setCameraMenuState({ commit }, data) {
    commit('setCameraMenuState', data)
  },

  showBigPhoto({ commit }, data) {
    commit('showBigPhoto', data)
  },

  saveStream({ commit }, data) {
    commit('saveStream', data)
  },

  saveBackCameraStream({ commit }, data) {
    commit('saveStream', data)
  },

  savePhoto({ commit }, data) {
    commit('savePhoto', data)
  },

  savePhotoSrc({ commit }, data) {
    commit('savePhotoSrc', data)
  },

  clearCameraIcon({ commit }, data) {
    commit('clearCameraIcon', data)
  },

  saveMessage({ commit }, data) {   
    commit('saveMessage', data)
  },

  setLoaderState({ commit }, data) {   
    commit('setLoaderState', data)
  },

  // setMessageMenuState({ commit }, data) {
  //   commit('setMessageMenuState', data)
  // },

  // setMessageId({ commit }, data) {
  //   commit('setMessageId', data)
  // }, 
  
}