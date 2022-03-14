<template>
  <v-app>

      <Navbar></Navbar>
      <v-main>
     
        <router-view/>
        
      </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar';// Se importa componente NevDrawers


export default {
  name: 'App',
  components: {Navbar,Footer},
  data: () => ({
    //
  }),
};
</script>
