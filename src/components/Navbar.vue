<template>
  <v-container>
    <v-toolbar color="black" dark fixed >
      <v-toolbar-title>
        <v-img src="../assets/img/racingPerformance.jpeg" width="50%"></v-img>
      </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text v-if="auth"><router-link class="links" to="/admin">Administración</router-link></v-btn>
          <v-btn text><router-link class="links" to="/">Inicio</router-link></v-btn>
          <v-btn text><router-link class="links" to="/productos">Productos</router-link></v-btn>
          <v-btn text><router-link class="links" to="/servicios">Servicios</router-link></v-btn>
          <v-btn text><router-link class="links" to="/chirighin">Chirighin</router-link></v-btn>
          <v-btn text><router-link class="links" to="/contacto">Contacto</router-link></v-btn>
          <v-btn text @click="signOut" v-if="auth">
            <span class="mr-2">{{userDataEmail}}</span>
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
  </v-container>

</template>
<script>
import { logOut } from '../firebase/auth'
 export default {
    data: () => ({
      auth: false
    }),
    methods: {
      signOut() {
        logOut()
        this.$store.commit('delEmail')
      },
      setAuthState() {
         if(this.userDataEmail == "") {
          this.auth = false
        } else {
          this.auth = true
        }
      }
    },
    computed: {
      userDataEmail() {
        return this.$store.state.email
      }
    },
    watch: {
      userDataEmail() {
       this.setAuthState()
      }
    },
    mounted() {
      this.setAuthState()
    }
  }
  

</script>
<style scoped>
.links {
  color: white;
  text-decoration: none;
}
</style>