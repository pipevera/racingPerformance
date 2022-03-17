import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import { showData } from '../firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    email: ""
  },
  plugins: [createPersistedState()],
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