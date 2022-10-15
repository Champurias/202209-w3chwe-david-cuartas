export interface PokemonInfo {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}
export interface PokemonList {
  count: number;
  next: string;
  previous: string | undefined;
  results: [
    {
      name: string;
      url: string;
    }
  ];
}
