
 <template>

  <v-footer
    dark
    padless 
   
  >

    <v-card
      class="flex"
      flat
      tile
    >
   <v-container >
      <v-card-title >
        <strong class="subheading ">¡Agenda tu hora vía redes sociales!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon class="icon" size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 text-center" color="black">
        {{ new Date().getFullYear() }} — <strong>Racing Performance</strong>
      </v-card-text>
     </v-container>
    </v-card>

  </v-footer>

</template>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style>
.color-footer{
  background-color: #31a1ac ;
}
.icon{
  color:#31a1ac ;
}
</style>