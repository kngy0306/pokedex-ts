export type PokemonData = {
  id: number;
  name: string;
  weight: number;
  type: string;
  image: string;
  animatedImage: string;
};

export type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
