<template>
  <div>
      <Carousel></Carousel> 
   <Main></Main> 
  <!-- <HomeCards></HomeCards> -->
  
  </div>
</template>

<script>
// import HomeCards from '../components/HomeCards'
import Main from '../components/Main.vue'
import Carousel from '../components/Carousel.vue'

  export default {
      data: () => ({
    name: 'Home',

 }),


 components: {
    Carousel,
       Main,
  // HomeCards,
  },
};
</script>


<style scoped>
body {
  font-family: "Teko", sans-serif;
}

p {
  font-size: 18px;
}
h1 {
  font-family: "Teko", sans-serif;
  font-size: 4rem;
  font-weight: normal;
}
.v-card.on-hover.theme--dark{
  background-color: rgba(#FFF, 0.8);
}
</style>