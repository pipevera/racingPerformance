<template>
  <div>
 
    <v-app-bar  color="black" dark fixed height="100px"
    >

      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
          color="#31A1AC"
        dark
        prominent
      ></v-app-bar-nav-icon>
      
        <v-toolbar-title>
        <v-img src="../assets/img/racingPerformance.jpeg" width="35%">
         <!-- <router-link class="navbar-brand" to="/"></router-link> -->
        </v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="ma-6 hidden-sm-and-down" >
        <v-btn color="black" dark>
            
        <v-icon>mdi-home-outline</v-icon><router-link class="links" to="/">Home</router-link></v-btn>
       <v-btn text><router-link class="links" to="/productos">Productos</router-link></v-btn>
      <!-- <v-btn text><router-link class="links" to="/servicios">Servicios</router-link></v-btn>
        <v-btn text><router-link class="links" to="/chirighin">Chirighin</router-link></v-btn> -->
      <v-btn text><router-link class="links" to="/contacto">Contacto</router-link></v-btn>
       <v-btn color="#31A1AC">  <v-icon left>mdi-login</v-icon><router-link class="links button is-dark " to="/login">Iniciar sesión</router-link></v-btn>
   <v-btn text v-if="auth"><router-link class="links" to="/admin">Administración</router-link></v-btn>
      </v-toolbar-items>
    </v-app-bar>

     
 <v-navigation-drawer
      v-model="drawer"
   absolute
      left
      temporary
         color="#31A1AC "
    bottom
      dark
      prominent
    >
   <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
         <v-icon>mdi-account-supervisor-circle</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            
            <v-list-item-title class="font-weight-bold">Bienvenido</v-list-item-title>
          
            <span text v-if="auth" class="mr-2" style="font-size:14px">{{userDataEmail}}</span>
          
         
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
      <v-list nav dense>
      <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        

      <v-divider></v-divider>
      </v-list>

        <div class="pa-2">  <v-btn block @click="signOut" ><v-icon>mdi-logout</v-icon>
          Cerrar sesión
          </v-btn>
        </div>
  
    </v-navigation-drawer> 
  </div>
</template>





<script>
import { logOut } from '../firebase/auth'
 export default {
    data: () => ({
      auth: false,
      drawer: false, // Se crea condicion drawer
       group: null,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'Mi Cuenta', icon: 'mdi-account' },
          { title: 'Admin', icon: 'mdi-gavel' },
        ],

    }),
  
    methods: {
      signOut() {
        logOut()
          this.$store.commit('delEmail')
       
      },
      //   group () {
      //   this.drawer = false
      // },
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