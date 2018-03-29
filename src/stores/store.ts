import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import userStore from './user'

Vue.use(Vuex);
Vue.use(VueRouter);

export default new Vuex.Store( {
  modules: {
    // this module is not namespaced
    user : userStore
  },
});
