<template>
  <v-container class="" style=" padding-top: 10rem;">
    <v-row align="center" justify="center">

      <v-col cols="12" class="d-flex justify-md-space-between">
       
      
           <h1 class="contenedor mt-0 mb-15">
                  <strong color="#31A1AC">Registro</strong> de productos
                </h1>
          <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
           class="mt-4 mr-4"
                    color="#31A1AC"
                    x-large
          dark
          v-bind="attrs"
          v-on="on"
        >
           <v-icon left>mdi-plus</v-icon>
          Agregar Producto
        </v-btn>

      
      </template>
      <v-card>
        <v-card-title>
          <h2 class="text-h5 font-weight-bold pt-6">Ingresar nuevo producto</h2>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
               
              </v-col>
              <v-col cols="12">
                <v-text-field label="Nombre" v-model="productos.nombre"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Precio" required v-model="productos.precio"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Descripción" required v-model="productos.descripcion"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
               <v-text-field label="imagen" required v-model="productos.imagen"
                ></v-text-field> 

  <!-- <v-file-input 
  v-model="imagen"
     @change="Preview_image"
      chips
      multiple
      label="Subir imagen"
    ></v-file-input>
    <v-img :src="url"></v-img> -->

                </v-col>
            </v-row>
          </v-container>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
             <v-btn     color="#31A1AC"
                      outlined
                      class="mt-4 mr-4"
                      x-large @click="dialog = false">cerrar</v-btn>
          <v-btn     class="mt-4 mr-4"
                    color="#31A1AC"
                    dark
                    x-large @click="addProduct">  <v-icon left>mdi-plus</v-icon>Agregar</v-btn>
          
       
        </v-card-actions>
      </v-card>
    </v-dialog>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col cols="12">
        <v-data-table :headers="headers"  :items="products" :items-per-page="5" class="elevation-1" >
<template v-slot:item.actions="{ item }" > 
             
        <!-- <template v-slot:item.precio.actions="{ item }"> -->
      <!-- <v-chip
      :item="ite"
        :color="getColor(item.precio)"
        dark
      >
        {{ item.precio}}
      </v-chip> -->

                  
          <v-tooltip bottom> <template v-slot:activator="{ on, attrs }"><v-icon   v-bind="attrs"
          v-on="on" small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon> </template> <span>Editar</span></v-tooltip>

       <v-tooltip bottom> <template v-slot:activator="{ on, attrs }"><v-icon   v-bind="attrs"
          v-on="on" small @click="openDeleteModal">mdi-delete</v-icon> </template> <span>Eliminar</span></v-tooltip>
            <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
            <v-card-title class="text-h5">¿Quieres eliminar el producto?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm(item)">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
         </template>
      </v-data-table>
      
      </v-col>
    </v-row>
    
        
  </v-container>
</template>
<script>
import { addData } from '../firebase/firestore.js'
import { deleteData } from '../firebase/firestore.js'
import Swal from "sweetalert2";

  export default {
    data() {
      return {
        productos: {
          nombre: "",
          precio: "",
          descripcion: "",
          imagen: "",
          url:"",
        },
        dialogDelete: false,
        dialog: false,
        headers: [
          {text: 'Nombre',value: 'nombre'},
          { text: 'Valor', value: 'precio' },
          { text: 'Descripción', value: 'descripcion' },
          { text: 'Imagen', value: 'imagen' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      }
    },
    methods: {
      crearProductoCallback() {
        // alert('Producto creado')
        this.productos.nombre = "",
        this.productos.precio = "",
        this.productos.descripcion = "",
        this.productos.imagen = ""

        

                    Swal.fire({
  title: 'Muy bien...',
  text: 'Producto agregado',
  icon: 'success',
  confirmButtonText: 'Continuar',
  // footer: '<a href="http://localhost:8081/register">Registrarse</a>'
});
    

      },

        Preview_image() {
          this.url= URL.createObjectURL(this.imagen)
        },

      addProduct() {
        addData(this.productos, this.crearProductoCallback)
        this.dialog = false
      },
      reset() {
        this.productos = ""
      },
      openDeleteModal() {
        this.dialogDelete = true
      },
      closeDelete() {
        this.dialogDelete = false
      },
      async deleteItemConfirm(item) {
        await deleteData(item.id)
        this.dialogDelete = false
        alert("elemento eliminado")
        await this.$store.dispatch('getData')
      },
        editItem(item){
        this.$router.push({
          name: "Editar", 
          params: { item }
        })
        },
      
    },
    created() {
      this.$store.dispatch('getData')
    },

      deleteItemConfirm(item) {
      this.$store.commit('deleteItemConfirm', item);
      
    },


      getColor (precio) {
        if (precio> 400) return 'red'
        else if (precio> 200) return 'orange'
        else return 'green'
      },
    
    
    computed: {
      products() {
        return this.$store.state.products
      }
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