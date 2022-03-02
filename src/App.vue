<template>
  <v-app>
    <v-app-bar app flat color="black" height="100">
      <Navbar></Navbar>
    </v-app-bar>
      <v-main>
        <router-view/>
      </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {Navbar, Footer},
  data: () => ({
    //
  }),
};
</script>
