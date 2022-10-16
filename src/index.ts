import getPokemon from "./apiPokemon/getPokemon.js";
const newPokemon = await getPokemon("https://pokeapi.co/api/v2/pokemon");

console.log(newPokemon);
