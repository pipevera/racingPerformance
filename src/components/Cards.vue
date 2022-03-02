<template>
  <v-col xs="12" sm="6" md="6" lg="4">
    <v-card class="mx-auto" max-width="344">
      <v-img height="200px"></v-img>
      <v-card-title>{{producto.nombre}}</v-card-title>
      <v-card-subtitle>{{producto.descripcion}}</v-card-subtitle>
      <v-btn color="success" class="" @click="validate">Iniciar</v-btn>   
    </v-card>
  </v-col>    
</template>
<script>
export default {
  props: ["producto"],
  data() {
    return {
      
    }
  }
}
</script>
<style scoped>
.card {
  margin-top: 3rem;
}

</style>