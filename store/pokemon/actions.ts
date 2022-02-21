import { ActionTree } from 'vuex';
import axios from 'axios';
import { PokemonState, Pokemon } from './types';
import { RootState } from '../types';


export const actions: ActionTree<PokemonState, RootState> = {
  fetchData({ commit }): any {
    axios({
      url: 'https://next.json-generator.com/api/json/get/41AeRPqnE',
    }).then((response) => {
      const payload: Pokemon = response && response.data;
      commit('profileLoaded', payload);
    }, (error) => {
      console.log(error);
      commit('profileError');
    });
  },
};