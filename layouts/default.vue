<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    const root = document.querySelector('html')
    const deviceWidth = root.clientWidth
    root.style.fontSize = (deviceWidth / 360) * 16 + 'px'

    window.addEventListener('resize', () => {
      const root = document.querySelector('html')
      const deviceWidth = root.clientWidth
      root.style.fontSize = (deviceWidth / 360) * 16 + 'px'
    })

    navigator.mediaDevices
    .enumerateDevices()
    .then(devices => {
      const nOfVideoDevices = devices.filter(device => device.kind === 'videoinput').length
      console.log(`You have ${nOfVideoDevices} videoinput device`)  
      if (nOfVideoDevices >= 2) { 
        this.$store.commit('setMobileState', true)
      } else {
        this.$store.commit('setMobileState', false)
      }
    })
    .catch(function (err) {
      console.log(err.name + ': ' + err.message)
    })
  },
}
</script>
