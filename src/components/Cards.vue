<template>
  <v-col xs="12" sm="6" md="6" lg="4">
    <v-card class="mx-auto" max-width="344">
      <v-img :src="producto.imagen" height="200px"></v-img>
      <v-card-title class="titulo">{{producto.nombre}}</v-card-title>
      <v-card-subtitle>{{producto.precio}}</v-card-subtitle>
      <v-card-text>{{producto.descripcion}}</v-card-text>
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

.titulo {
  font-size: 1.5em;
}

</style>