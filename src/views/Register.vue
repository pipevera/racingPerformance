<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="6" sm="8" md="8" class="contenedor">
        <v-alert dense dismissible text type="success" v-model="alert">Usuario registrado</v-alert>
        <h1>Registro de usuario</h1>
      </v-col>
    </v-row>
        <v-form ref="form" lazy-validation>
          <v-row align="center" justify="center">
            <v-col cols="6" sm="8" md="8" class="">
              <v-text-field v-model="email" label="E-mail" required></v-text-field>
              <v-text-field v-model="password" :counter="20" type="password" label="Password" @keypress.enter="register" required></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
           <v-col cols="6" sm="5" md="5" lg="6" xl="4">
              <v-btn color="success" class="mt-4 mr-4" @click="register">Registrar</v-btn>
              <v-btn color="error" class="mt-4 mr-4" @click="resetForm">Limpiar Formulario</v-btn>
              <v-btn color="warning" class="mt-4 mr-4" @click="login">Iniciar sesión</v-btn>
           </v-col>
          </v-row>
         
        </v-form>

  </v-container>
</template>
<script>
import { userRegister } from '../firebase/auth' 
  export default {
    data() {
      return {
        alert: false,
        email: "",
        password: ""
      }
    },
    methods: {
      register() {
        userRegister(this.email, this.password, this.alertRegister)
      },
      resetForm() {
        this.email = ""
        this.password = ""
      },
      alertRegister() {
        this.alert = true
        this.email = ""
        this.password = ""
      },
      login() {
        this.$router.push('/login')
      }
    },
  }
</script>
<style scoped>
.contenedor {
  margin-top: 3rem;
}
</style>
