export interface Pokemon {
  id: number,
  name: string,
  url: string
}

export interface PokemonState {
  user?: Pokemon;
  error: boolean;
}