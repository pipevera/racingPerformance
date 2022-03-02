import Vue from 'vue'
import Vuex from 'vuex'
import { showData } from '../firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    email: ""
  },
  
  mutations: {
    getProducts(state, data) {
      state.products = data
    },
    email(state, data) {
      state.email = data
    },
    delEmail(state) {
      state.email = ""
    },
  },
  actions: {
    getData(context) {
      let saveProducts = (data) => {
        context.commit("getProducts", data);
      }
      showData(saveProducts);
    }
  },
  modules: {
  }
})
