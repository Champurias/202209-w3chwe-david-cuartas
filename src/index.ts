// Import getPokemon from "./apiPokemon/getPokemon.js";
// const newPokemon = await getPokemon("https://pokeapi.co/api/v2/pokemon");
import Header from "./components/Component/Header/Header";
const rootElement = document.querySelector(".root");
const header = new Header(rootElement as HTMLElement);
header.render();
