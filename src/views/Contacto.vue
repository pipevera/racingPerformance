<template>
  <v-container>
   
      <v-row class="justify-center mt-15">
        <v-col class="col-12 col-md-6">
          <h1 class="mb-10">Formulario de contacto</h1>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              ref="form"
              lazy-validation
            >
              <v-text-field
                name="name"
                v-model="form.name"
                :counter="10"
                :rules="nameRules"
                label="Nombre"
                required
              ></v-text-field>

              <v-text-field
                name="email"
                v-model="form.email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

             
              <v-textarea
                name="message"
                v-model="form.message"
                solo
                label="Escribe tu comentario"
              ></v-textarea>
     
              <div data-netlify-recaptcha="true"></div>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="handleSubmit"
              >
                Enviar
              </v-btn>

             
            </form>
          </v-col>
        </v-row>
  </v-container>
</template>
<script>
import axios from "axios"
  export default {
    data: () => ({
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      form: {
        name: "",
        email: "",
        message: ""
      }
    }),

    methods: {
     encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
      },
      handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "contact",
          ...this.form
        }),
        axiosConfig
      );
    }
  },
}
</script>