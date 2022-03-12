<template>
  <div>

    <v-container class="grey lighten-5">
      <h1 class="text-center mt-10 pb-13 pt-10">
        <strong>¿Tu moto tiene fallas </strong>Y NO SABES DE QUE SE TRATA?
      </h1>
      <v-row no-gutters class="mt-16 pa-2">
        <v-col cols="12" sm="6" md="6">
          <p class="pa-2 py-15 px-16 mt-16" tile>
            Comunícate con nuestro mecánico para evaluar la falla de tu moto.
            Según disponibilidad en nuestro taller, se agendará una hora para
            que te ayude a resolver el problema. Revisa nuestros precios y
            servicios que tenemos en nuestro taller. Estos precios pueden variar
            según modelo y cilindrada de tu moto.
          </p>
        </v-col>
        <v-col cols="6" md="4">
          <v-img class="pa-2" tile src="../assets/img/sign1.png"></v-img>
        </v-col>
      </v-row>

      <!-- START- SECCTION REPUESTO DE MOTOS -->
      <h1 class="text-center mt-10 pb-13 pt-10">
        <strong>Repuestos de</strong> MOTOS ONLINE
      </h1>
      <v-row>
        <v-col
          xs="12"
          sm="12"
          md="6"
          lg="4"
          v-for="(personaje, index) in Products"
          :key="index"
        >
          <HomeCards :ProductProp="personaje"></HomeCards>
          <!--Se pasa prop padre al componente HomeCards -->
        </v-col>
      </v-row>

      <!-- END- SECCTION REPUESTO DE MOTOS -->

      <!-- START- SECCTION COMO ELEGIR PERFORMANCE -->
      <h1 class="text-center mt-10 pb-13 pt-10">
        <strong>¿Por qué elegir</strong> RACING PERFORMANCE
      </h1>
      <v-row class="justify-center">
        <v-col cols="12" sm="12" md="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              class="mx-auto"
              max-width="700"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">RACING PERFORMANCE</div>
                  <v-list-item-title class="text-h5 mb-1">
                    Mecánicos moteros
                  </v-list-item-title>
                </v-list-item-content>
                <v-avatar>
                  <img
                    src="../assets/img/icon-moto.png"
                    alt="Mecánicos moteros"
                  />
                </v-avatar>
              </v-list-item>

              <v-card-actions>
                <v-card-actions>
                  <v-btn class="mx-2" color="#31A1AC" text> Ver más </v-btn>

                  <v-spacer></v-spacer>

                  <v-btn icon @click="showCardOne = !showCardOne">
                    <v-icon>{{
                      showCardOne ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="showCardOne">
                    <v-divider></v-divider>

                    <v-card-text>
                      Nuestros mecánicos andan en moto al igual que tu, asi que
                      conocen en carne propia las fallas y problemas que puedes
                      tener con tu moto y también las soluciones más óptimas.
                    </v-card-text>
                  </div>
                </v-expand-transition>
                <!-- <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn> -->
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="12" md="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              class="mx-auto"
              max-width="700"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">RACING PERFORMANCE</div>
                  <v-list-item-title class="text-h5 mb-1">
                    Comunicación directa
                  </v-list-item-title>
                </v-list-item-content>
                <v-avatar>
                  <img src="../assets/img/icon-mobile.png" alt="John" />
                </v-avatar>
              </v-list-item>

              <v-card-actions>
                <v-card-actions>
                  <v-btn class="mx-2" color="#31A1AC" text> Ver más </v-btn>

                  <v-spacer></v-spacer>

                  <v-btn icon @click="showCardtwo = !showCardtwo">
                    <v-icon>{{
                      showCardtwo ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="showCardtwo">
                    <v-divider></v-divider>

                    <v-card-text>
                      Hablarás directamente con el mecánico que verá tu moto. A
                      domicilio y en nuestro taller puedes ver como realizamos
                      todo el trabajo.
                    </v-card-text>
                  </div>
                </v-expand-transition>
                <!-- <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn> -->
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>

      <v-row class="justify-center mb-16">
        <v-col cols="12" sm="12" md="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              class="mx-auto"
              max-width="700"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">RACING PERFORMANCE</div>
                  <v-list-item-title class="text-h5 mb-1">
                    Basados en la confianza
                  </v-list-item-title>
                </v-list-item-content>
                <v-avatar>
                  <img
                    src="../assets/img/icon-security.png"
                    alt="Mecánicos moteros"
                  />
                </v-avatar>
              </v-list-item>

              <v-card-actions>
                <v-card-actions>
                  <v-btn class="mx-2" color="#31A1AC" text> Ver más </v-btn>

                  <v-spacer></v-spacer>

                  <v-btn icon @click="showCardthree = !showCardthree">
                    <v-icon>{{
                      showCardthree ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="showCardthree">
                    <v-divider></v-divider>

                    <v-card-text>
                      Nosotros tenemos los repuestos, y de ser necesarios otros
                      que no tengamos, nos encargamos de resolverlo por nuestra
                      cuenta. Así te desligas totalmente de tener que buscar tú
                      los repuestos.
                    </v-card-text>
                  </div>
                </v-expand-transition>
                <!-- <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn> -->
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="12" md="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              class="mx-auto"
              max-width="700"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">RACING PERFORMANCE</div>
                  <v-list-item-title class="text-h5 mb-1">
                    Servicio rápido y seguro
                  </v-list-item-title>
                </v-list-item-content>
                <v-avatar>
                  <img
                    src="../assets/img/icon-service.png"
                    alt="comunicacion directa"
                  />
                </v-avatar>
              </v-list-item>

              <v-card-actions>
                <v-card-actions>
                  <v-btn class="mx-2" color="#31A1AC" text> Ver más </v-btn>

                  <v-spacer></v-spacer>

                  <v-btn icon @click="showCardfour = !showCardfour">
                    <v-icon>{{
                      showCardfour ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="showCardfour">
                    <v-divider></v-divider>

                    <v-card-text>
                      Los trabajos de mantención y cambios de kit de arrastre,
                      son entregados dentro del día, en un lapso de 5 horas. Hay
                      que agendar con al menos 24horas de anticipación.
                    </v-card-text>
                  </div>
                </v-expand-transition>
                <!-- <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn> -->
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <!-- END- SECCTION COMO ELEGIR PERFORMANCE -->
    </v-container>
  </div>
</template>
<script>
import HomeCards from "../components/HomeCards";
import Products from "../../Products"; // Se importa componentes personajes
export default {
  data: () => ({
    showCardOne: false,
    showCardtwo: false,
    showCardthree: false,
    showCardfour: false,
    Products: Products,
  }),

  components: {
    HomeCards,
    // Navbar,
  },
};
</script>

<style scoped>
body {
  font-family: "Teko", sans-serif;
}

p {
  font-size: 18px;
}
h1 {
  font-family: "Teko", sans-serif;
  font-size: 4rem;
  font-weight: normal;
}
.v-card.on-hover.theme--dark {
  background-color: rgba(#fff, 0.8);
}
</style>
