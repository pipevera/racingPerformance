<template>
  <v-container>
   
    <v-row align="center" justify="center" style=" padding-top: 10rem;">
      <v-col cols="6" sm="8" md="8" class="contenedor">
        <h1 class="contenedor mt-0 mb-15">
                  <strong color="#31A1AC">Editar Producto: </strong>{{producto.nombre}}
                </h1>
      </v-col>
    </v-row>
      <v-form ref="form" lazy-validation>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8" class="">
              <v-text-field color="#31A1AC" v-model="producto.nombre" label="Nombre" required></v-text-field>
              <v-text-field color="#31A1AC" v-model="producto.precio"  label="Precio" required></v-text-field>
              <v-text-field color="#31A1AC" v-model="producto.descripcion" label="Descripción" required></v-text-field>
              <v-text-field color="#31A1AC" v-model="producto.imagen" label="Imagen" required></v-text-field>
            </v-col>
       
       </v-row>
               <v-row align="center" justify="center">
           <v-col cols="6" sm="5" md="6" lg="6" xl="4">
              <v-btn color="#31A1AC"   x-large dark class="mt-4 mr-4" @click="actualizar"><v-icon left>mdi-backup-restore</v-icon> Actualizar </v-btn>
              <v-btn class="mt-4 mr-4"   x-large color="#31A1AC" outlined @click="regresar">Regresar <v-icon right>mdi-arrow-right</v-icon>  </v-btn>
           </v-col>
           
          </v-row>
        </v-form>
       
 
  </v-container>
</template>
<script>
import { updateData } from '../firebase/firestore'
import Swal from "sweetalert2";
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
    //   alert("producto actualizado")
      this.$router.push('/admin')

      Swal.fire({
  title: 'Muy bien...',
  text: 'Producto actualizado',
  icon: 'success',
  confirmButtonText: 'Continuar',
});
    
    
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