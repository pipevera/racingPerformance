<template>
  <v-container>
   
    <v-row align="center" justify="center">
      <v-col cols="6" sm="8" md="8" class="contenedor">
        <h1>Editando {{producto.nombre}} </h1>
      </v-col>
    </v-row>
      <v-form ref="form" lazy-validation>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8" class="">
              <v-text-field v-model="producto.nombre" label="Nombre" required></v-text-field>
              <v-text-field v-model="producto.precio"  label="Precio" required></v-text-field>
              <v-text-field v-model="producto.descripcion" label="Descripción" required></v-text-field>
              <v-text-field v-model="producto.imagen" label="Imagen" required></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
           <v-col cols="4" sm="5" md="5" lg="6" xl="4">
              <v-btn color="success" class="mt-4 mr-4" @click="actualizar">Actualizar</v-btn>
              <v-btn color="warning" class="mt-4 mr-4" @click="regresar">Regresar</v-btn>
           </v-col>
          </v-row>
        </v-form>
 
  </v-container>
</template>
<script>
import { updateData } from '../firebase/firestore'
export default {
  data() {
    return {
      producto: {
        nombre: "",
        precio: "",
        descripcion: "",
        imagen: ""
      }
    }
  },
  methods: {
    regresar() {
      this.$router.push('/admin')
    },
    actualizar() {
      updateData(this.producto)
      alert("producto actualizado")
      this.$router.push('/admin')
    },
    reset() {
      this.producto = ""
    }
  },
  mounted() {
    this.producto = this.$route.params.item;
  }
  
}
</script>