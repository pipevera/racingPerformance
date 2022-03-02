<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="6" sm="8" md="8" class="contenedor">
        <h1>Login de usuario</h1>
      </v-col>
    </v-row>
        <v-form ref="form" lazy-validation>
          <v-row align="center" justify="center">
            <v-col cols="6" sm="8" md="8" class="">
              <v-text-field v-model="email" label="E-mail" required></v-text-field>
              <v-text-field v-model="password" :counter="20" type="password" label="Password" required @keypress.enter="validate"></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
           <v-col cols="6" sm="5" md="5" lg="6" xl="4">
              <v-btn color="success" class="mt-4 mr-4" @click="validate">Iniciar</v-btn>
              <v-btn color="error" class="mt-4 mr-4" @click="reset">Limpiar Formulario</v-btn>
               <v-btn color="warning" class="mt-4 mr-4" @click="register">Registrar</v-btn>
           </v-col>
          </v-row>
        </v-form>
  </v-container>
</template>
<script>
import { userLogin } from '../firebase/auth'
  export default {
    data() {
      return {
        email: "",
        password: ""
      }
    },
    methods: {
      validate() {
        userLogin(this.email, this.password)
        this.$router.push('admin')
      },
      reset() {
        this.email = ""
        this.password = ""
      },
      register() {
        this.$router.push('register')
      }
    },
  }
</script>
<style scoped>
.contenedor {
  margin-top: 3rem;
}
.botonRouter {
  text-decoration: none;
  color: #fff;
}
</style>