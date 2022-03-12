<template>
  <v-container class="pt-16">
    <v-row class="justify-center">
      <v-col cols="12" sm="12" md="6" class="d-none d-sm-flex">
        <v-img
          class="pa-2"
          tile
          src="../assets/img/bienvenido.png"
          width="70%"
        ></v-img>
      </v-col>

      <v-col cols="12" sm="6" md="4" class="mt-13">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            class="mx-auto pa-14 mt-7"
            max-width="800px"
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
          >
            <v-form ref="form" lazy-validation>
              <h1 class="contenedor mt-0 mb-15">
                <strong color="#31A1AC">LOGIN</strong> de usuario
              </h1>

              <v-text-field
                v-model="email"
                label="E-mail"
                color="#31A1AC"
                :rules="rules"
                required
              >
                <v-icon slot="append" color="#31A1AC">
                  mdi-email-outline
                </v-icon></v-text-field
              >
              <v-text-field
                v-model="password"
                :counter="20"
                color="#31A1AC"
                type="password"
                label="Password"
                required
                @keypress.enter="validate"
              >
                <v-icon slot="append" color="#31A1AC">
                  mdi-key-variant
                </v-icon></v-text-field
              >

              <v-row class="justify-center mt-12 d-sm-block d-md-inline-flex">
                <v-col cols="12" sm="12" md="6">
                  <v-btn
                    color="#31A1AC"
                    outlined
                    class="mt-4 mr-4"
                    x-large
                    @click="register"
                    >Registrar</v-btn
                  >
                  <!-- <v-btn color="success" class="mt-4 mr-4" @click="validate">Iniciar</v-btn> -->
                </v-col>
                <v-col cols="12" sm="12" md="6">
                  <v-btn
                    class="mt-4 mr-4"
                    color="#31A1AC"
                    x-large
                    @click="validate"
                    dark
                  >
                    <v-icon left>mdi-login</v-icon>Iniciar sesión</v-btn
                  >
           
                  <!-- <v-btn color="error" class="mt-4 mr-4" @click="reset">Limpiar Formulario</v-btn> -->
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { userLogin } from "../firebase/auth";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    validate() {
      userLogin(this.email, this.password);
      this.$router.push("admin");
      // alert('usuario no registrado')


Swal.fire({
  title: 'Oops...',
  text: 'Usuario no registrado',
  icon: 'error',
  confirmButtonText: 'Continuar',
  // footer: '<a href="http://localhost:8081/register">Registrarse</a>'
});
    
    },
    
    


    reset() {
      this.email = "";
      this.password = "";
    },
    register() {
      this.$router.push("register");
    },
  },
};
</script>
<style scoped>
h1 {
  font-family: "Teko", sans-serif;
  font-size: 4rem;
  font-weight: normal;
}
b,
strong {
  color: #31a1ac;
}

.contenedor {
  margin-top: 3rem;
}
.botonRouter {
  text-decoration: none;
  color: #fff;
}
</style>
