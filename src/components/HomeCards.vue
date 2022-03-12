
<template>
  <div class="pa-10">
   
    <v-card max-width="450">
      <v-img :src="ProductProp.imagen" height="200px"></v-img>

      <v-card-title class="d-flex justify-space-between">{{ ProductProp.nombre }}
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
    </v-card>
  
  </div>
</template>
<script>
export default {
  props: ["ProductProp"],
  data() {},
};
</script>

<style scoped>
.v-card {
  margin: auto; 
}
</style>