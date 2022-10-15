import type { PokemonInfo } from "../types.js";
const getPokemon = async (pokemonUrl: string) => {
  const response = await fetch(pokemonUrl);
  const result = (await response.json()) as PokemonInfo;
  return result;
};

export default getPokemon;
