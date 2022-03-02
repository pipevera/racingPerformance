<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col >
<h1>Administración de productos</h1>
      </v-col>
      <v-col >
          <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Agregar Producto
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Nuevo Producto</span>
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
                </v-col>
            </v-row>
          </v-container>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" class="mt-4 mr-4" @click="addProduct">Agregar</v-btn>
          
          <v-btn color="warning" class="mr-4 mt-5" @click="dialog = false">cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col cols="12">
        <v-data-table :headers="headers"  :items="products" :items-per-page="5" class="elevation-1" >
         <template v-slot:item.actions="{ item }">
           <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon small @click="openDeleteModal">mdi-delete</v-icon>
            <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
            <v-card-title class="text-h5">¿Quieres eliminar el producto?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="() => deleteItemConfirm(item)">OK</v-btn>
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

  export default {
    data() {
      return {
        productos: {
          nombre: "",
          precio: "",
          descripcion: "",
          imagen: "",
        },
        dialogDelete: false,
        dialog: false,
        headers: [
          {text: 'Nombre',value: 'nombre'},
          { text: 'Valor', value: 'precio' },
          { text: 'Descripción', value: 'descripcion' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      }
    },
    methods: {
      crearProductoCallback() {
        alert('Producto creado')
        this.productos.nombre = "",
        this.productos.precio = "",
        this.productos.descripcion = "",
        this.productos.imagen = ""

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
    },
    created() {
      this.$store.dispatch('getData')
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
  font-size: 3em;
}
</style>