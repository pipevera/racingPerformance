<template>
  <v-container style="padding: 9rem 20rem;">
      
       <v-col >
      <h1 class="contenedor mt-0 ">
                  <strong color="#31A1AC">Tienda</strong> de productos
                </h1>

  <v-container id="dropdown-example-1" >
    <v-overflow-btn
      class="my-2"
      :items="dropdown_font"
      label="Ordenar por"
      loading
      target="#dropdown-example-1"
        color="#31A1AC"
    
    ></v-overflow-btn>
  </v-container>


                </v-col>


        <v-row align-center justify-center>
          
      <Card  
     
        v-for="(producto, index) in products" 
        :key="index"
        :producto="producto"
      ></Card>
   
</v-row>
       <div class="text-center mt-16">
  <v-pagination
      :length="3"
       v-model="page"
       color="#31A1AC"
    
    ></v-pagination>
  </div>
  </v-container>
    
</template>
<script>
import Card from '../components/Cards.vue'
export default {
  components: { Card },
  data() {
    return {
        page: 1,
        dropdown_font: ['Precio', 'Nombre de producto'],
    }
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