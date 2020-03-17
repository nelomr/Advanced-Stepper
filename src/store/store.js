import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 0,
    currentStep: 0,
    steps: [
      { name: 'Components', },
      { name: 'CSS styles', },
      { name: 'API request', },
      { name: 'New feature', },
      { name: 'Tests', },
    ],
    orders: [],
    products: [],
    productsDetailOrder: []
  },
  plugins: [createPersistedState()],
  actions,
  mutations
})
