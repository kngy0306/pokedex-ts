import React, { useEffect, useState } from 'react';

type PokemonData = {
  id: number;
  name: string;
  weight: string;
  type: string;
  image: string;
  animated_image: string;
};

type Types = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

const Main: React.FC = () => {
  console.log('main');
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);

  const FetchPokemon = async () => {
    try {
      for (let id = 387; id <= 389; id++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error('Found no Pokemon!');
        }

        const data = await response.json();
        const type = data.types.map((d: Types) => d.type.name).join(', ');

        const pokemon: PokemonData = {
          id: data.id,
          name: data.name,
          weight: data.weight,
          type: type,
          image: data.sprites.other['official-artwork'].front_default,
          animated_image:
            data.sprites.versions['generation-v']['black-white'].animated
              .front_default,
        };

        setPokemons((prevPokemons) => {
          return [...prevPokemons, pokemon];
        });
      }

      console.log(pokemons);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchPokemon();
  });

  return <h1>React</h1>;
};

export default Main;
