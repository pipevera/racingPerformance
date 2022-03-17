<template>
  <div>
    <h1 class="mb-10">Formulario de contacto</h1>
    <form name="contact" method="POST">
      <input name="nombre" type="text" placeholder="Nombre" v-model="form.name">
      <input name="email" type="text" placeholder="Correo" v-model="form.email">
      <textarea name="mensaje" id="" cols="30" rows="10" v-model="form.mensaje"></textarea>
      <input name="form-name" type="hidden" value="contact"/>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>
<script>
export default {
  data(){
    return {
      form: {
        name: "",
        email: "",
        mensaje: ""

      }
    }
  }
}
</script>
