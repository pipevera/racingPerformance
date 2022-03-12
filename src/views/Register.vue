<template>
  <v-container class="pt-16">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="8" class="contenedor">
        <v-alert dense dismissible text type="success" v-model="alert"
          >Usuario registrado</v-alert
        >
      </v-col>
    </v-row>
    <v-form ref="form" lazy-validation>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="12" md="8" class="">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              class="mx-auto pa-14 mt-7"
              max-width="800px"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-form ref="form" lazy-validation>
                <h1 class="contenedor mt-0 mb-15">
                  <strong color="#31A1AC">REGISTRO</strong> de usuario
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
                      @click="login"
                    >
                      <v-icon left> mdi-arrow-left</v-icon> Volver</v-btn
                    >
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-btn
                      class="mt-4 mr-4"
                      color="#31A1AC"
                      x-large
                      @click="register"
                      dark
                    >
            Registrar</v-btn
                    >

                    <!-- <v-btn color="error" class="mt-4 mr-4" @click="reset">Limpiar Formulario</v-btn> -->
                  </v-col>
                </v-row>
              </v-form>
            </v-card>
          </v-hover>
          <!-- <v-text-field v-model="email" label="E-mail" required></v-text-field>
              <v-text-field v-model="password" :counter="20" type="password" label="Password" @keypress.enter="register" required></v-text-field> -->
        </v-col>
      </v-row>
      <!-- <v-row align="center" justify="center">
           <v-col cols="6" sm="5" md="5" lg="6" xl="4">
              <v-btn color="success" class="mt-4 mr-4" @click="register">Registrar</v-btn>
              <v-btn color="error" class="mt-4 mr-4" @click="resetForm">Limpiar Formulario</v-btn>
              <v-btn color="warning" class="mt-4 mr-4" @click="login">Iniciar sesión</v-btn>
           </v-col>
          </v-row> -->
    </v-form>
  </v-container>
</template>
<script>
import { userRegister } from "../firebase/auth";
export default {
  data() {
    return {
      alert: false,
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      userRegister(this.email, this.password, this.alertRegister);
    },
    resetForm() {
      this.email = "";
      this.password = "";
    },
    alertRegister() {
      this.alert = true;
      this.email = "";
      this.password = "";
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
.contenedor {
  margin-top: 3rem;
}
h1 {
  font-family: "Teko", sans-serif;
  font-size: 4rem;
  font-weight: normal;
}
b,
strong {
  color: #31a1ac;
}
</style>
