<template>
  <v-container>
    <v-row>
      <Card  
        v-for="(producto, index) in products" 
        :key="index"
        :producto="producto"
      ></Card>
    </v-row>
  </v-container>
    
</template>
<script>
import Card from '../components/Cards.vue'
export default {
  components: { Card },
  data() {
    return {
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

</style>