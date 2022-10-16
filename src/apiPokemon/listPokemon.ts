import type { PokemonList } from "../types.js";

const listPokemon = async (offset: number) => {
  const path = `?offset=${offset}&limit=10`;
  const urlApi = `https://pokeapi.co/api/v2/pokemon/${path}`;
  const response = await fetch(urlApi);
  const result = (await response.json()) as PokemonList;
  return result;
};

export default listPokemon;
