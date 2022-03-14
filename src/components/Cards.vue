<template>

  <v-col cols="12" sm="6" md="4">
         <v-hover v-slot="{ hover }" open-delay="200">
    <v-card class="mx-auto" max-width="344"   :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }">
         <v-img :src="producto.imagen" height="200px"></v-img>
      <v-card-title class="d-flex justify-space-between">{{producto.nombre}}
       <div>
            <v-btn icon color="#31A1AC">
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon color="#31A1AC" >
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon color="#31A1AC" >
            
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
              </div>
              </v-card-title>


              <v-col cols="12">

  <v-card-subtitl class="font-weight-bold pt-0" >{{producto.precio}}</v-card-subtitl> 

              </v-col>

    
    </v-card>
   </v-hover>
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


