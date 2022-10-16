import type { PokemonList } from "../types.js";

const listPokemon = async (list: number) => {
  const path = `?offset=${list}&limit=10`;
  const urlApi = `https://pokeapi.co/api/v2/pokemon/${path}`;
  const response = await fetch(urlApi);
  const result = (await response.json()) as PokemonList;
  return result;
};

export default listPokemon;
