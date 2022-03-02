<template>
  <v-carousel 
    cycle
    height="500"
    hide-delimiter-background
    show-arrows-on-hover>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    <v-row
            class="fill-height title"
            align="center"
            justify="center"
            
          >
            <div class="text-h2" style="color: white">
              {{item.title}}
            </div>
          </v-row>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require("../assets/img/moto1.jpg"),
            title: ""
          },
          {
            src: require("../assets/img/moto2.jpg"),
          },
          {
            src: require("../assets/img/moto3.jpg"),
          },
          {
            src: require("../assets/img/moto4.jpeg"),
          },
          {
            src: require("../assets/img/moto5.jpg"),
          }
        ],
      }
    },
  }
</script>