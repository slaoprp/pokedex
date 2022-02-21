import Vue from 'vue';
import Vuex from 'vuex';
import { pokemon } from './pokemon/index';
import { RootState } from './types';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    version: '1.0.0', // a simple property
  },
  modules: {
    pokemon,
  },
  mutations: {

  },
  actions: {

  },
});