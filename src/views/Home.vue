<template>
  <div>
    <Carousel></Carousel>
    <Main></Main>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import Main from '../components/Main.vue'
  export default {
    name: 'Home',
    components: {Carousel, Main},
  }
</script>
