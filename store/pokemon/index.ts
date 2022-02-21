import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { PokemonState } from './types';
import { RootState } from '../types';

export const state: PokemonState = {
  user: undefined,
  error: false,
};

const namespaced: boolean = true;

export const pokemon: Module<PokemonState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};