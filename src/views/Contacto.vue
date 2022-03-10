<template>
  <v-container>
   
      <v-row class="justify-center mt-15">
        <v-col class="col-12 col-md-6">
          <h1 class="mb-10">Formulario de contacto</h1>
            <form
              @submit.prevent="handleSubmit"
              id="formContact"
              name="contact"
              lazy-validation
            >
            <input type="hidden" name="contact" value="contact"/>
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
                type="submit"
              >
                Enviar
              </v-btn>

             
            </form>
          </v-col>
        </v-row>
  </v-container>
</template>
<script>
/* import axios from "axios" */
  export default {
    data: () => ({
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 15) || 'Name must be less than 10 characters',
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
      
     /*  handleSubmit(e) {
  e.preventDefault();
  let myForm = document.getElementById("formContact");
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
}, */
     encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
      },
      handleSubmit () {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          'form-name': 'contact',
          ...this.form
        }),
  })
      /* .then(() => {
        this.$router.push('thanks')
      })
      .catch(() => {
        this.$router.push('404')
      }) */
    }
  }
  }

</script>