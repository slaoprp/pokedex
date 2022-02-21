import { MutationTree } from 'vuex';
import { PokemonState, Pokemon } from './types';

export const mutations: MutationTree<PokemonState> = {
  pokemonLoaded(state, payload: Pokemon) {
    state.error = false;
    state.user = payload;
  },
  pokemonError(state) {
    state.error = true;
    state.user = undefined;
  },
};