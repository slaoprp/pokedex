import { GetterTree } from 'vuex';
import { PokemonState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<PokemonState, RootState> = {
  fullName(state): string {
    // const { user } = state;
    // const firstName = (user && user.firstName) || '';
    // const lastName = (user && user.lastName) || '';
    // return `${firstName} ${lastName}`;
    return "state"
  },
};