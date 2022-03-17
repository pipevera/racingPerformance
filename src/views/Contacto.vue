<template>
  <div class="contenedor">
    
    <form name="contact" method="POST" class="form">
      <h1 class="mb-10">Contacto</h1>
      <input name="nombre" type="text" placeholder="Nombre" v-model="form.name" class="input">
      <input name="numero" type="text" placeholder="Telefono" v-model="form.number" class="input">
      <input name="email" type="text" placeholder="Correo" v-model="form.email" class="input">
      <textarea name="mensaje" id="" placeholder="Mensaje" v-model="form.mensaje" class="textarea"></textarea>
      <input name="form-name" type="hidden" value="contact"/>
      <button type="submit" class="button">Enviar Mensaje</button>
    </form>
  </div>
</template>
<script>
export default {
  data(){
    return {
      form: {
        name: "",
        number: "",
        email: "",
        mensaje: ""
      }
    }
  }
}
</script>
<style scoped>
* {
  padding: 0px;
  margin: 0px;
  
}
body {
  background-image: url('../assets/img/fondo.jpg');
}
.contenedor {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.form {
  display: flex;
  flex-flow: column;
  width: 40%;
  height: 80%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0,0,0.8) 0px 0px 5px;
  border-radius: 10px;
}
.input {
  border: none;
  resize: none;
  outline: none;
  padding: 15px 0;
  width: 80%;
  margin: 20px;
  border-bottom: 1px solid;
}
.textarea {
  border: none;
  resize: none;
  outline: none;
  padding: 15px 0;
  width: 80%;
  margin: 20px;
  border-bottom: 1px solid;

}
.button {
  background-color: rgb(49, 161, 172);
  padding: 15px 30px;
  border-radius: 25px;
  color: aliceblue;
  font-weight: bold;
  margin: 20px 0px;
  transition: all 300ms;
}
input:focus {
  border-bottom-color: black;
}
button:hover {
  transform: scale(1.05);
}
</style>