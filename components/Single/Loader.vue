<template>
  <!-- <div v-if="loaderState" class="scene" ref="scene"> -->
  <div class="scene" ref="scene">
    <div class="rocket">
      <img src="/rocket.png" alt="rocket" />
    </div>
    <!-- <i 
      class="star" 
      v-for="i in 50" 
      :key="i" 
      :style="{ left: `${x}rem`, width: `1rem`, height: `${h}rem`, animationDuration: `${duration}s` }"
    ></i>       -->
  </div>

  <!-- <div v-if="loaderState" id="loader" class="text-center text-light">
    <div class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-secondary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-success" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-danger" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-warning" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-dark" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      x: null,
      h: null,
      duration: null,
    }
  },
  computed: {
    loaderState: {
      get() {
        return this.$store.getters.loaderState
      },
    },
  },
  methods: {
    stars() {
      let count = 50
      let scene = document.querySelector('.scene')
      let i = 0
      while (i < count) {
        let star = document.createElement('i')
        let x = Math.floor(Math.random() * window.innerWidth)
        let duration = Math.random() * 1
        let h = Math.random() * 100

        star.style.left = x + 'px'
        star.style.width = 1 +　'px'
        star.style.height = h + 'px'
        star.style.animationDuration = duration + 's'

        scene.appendChild(star)
        // this.$refs.scene.appendChild(star)
        i++
      }
    },
  },
  mounted() {
    this.stars()

    // this.x = Math.floor(Math.random() * window.innerWidth)
    // this.h = Math.random() * 100
    // this.duration = Math.random() * 1
  },
}
</script>

<style scoped>
.scene i {
  position: absolute;
  top: -15.625rem;
  background: rgba(255, 255, 255, 0.5);
  animation: animateStars linear infinite;
}
.scene {
  position: absolute;
  top: 3.125rem;
  bottom: 3.125rem;
  width: 100%;
  height: calc(100vh - 6.25rem);
  background: #000;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rocket::after {
  content: '';
  position: absolute;
  bottom: -12.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 0.625rem;
  height: 12.5rem;
  background: linear-gradient(#00d0ff, transparent);
  filter: blur(0.3125rem);
}
.rocket {
  position: relative;
  animation: animateRocket 0.2s ease infinite;
}
@keyframes animateRocket {
  0%,
  100% {
    transform: translateY(-0.125rem);
  }
  50% {
    transform: translateY(0.125rem);
  }
}
@keyframes animateStars {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(200vh);
  }
}
</style>