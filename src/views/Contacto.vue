<template>
  <v-container>
   
      <v-row class="justify-center mt-15">
        <v-col class="col-12 col-md-6">
          <h1 class="mb-10">Formulario de contacto</h1>
            <v-form
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Nombre"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

             
              <v-textarea
                v-model="message"
                solo
                name="input-7-4"
                label="Escribe tu comentario"
              ></v-textarea>
     
              <div data-netlify-recaptcha="true"></div>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Enviar
              </v-btn>

             
            </v-form>
          </v-col>
        </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message: "",
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      
    },
  }
</script>