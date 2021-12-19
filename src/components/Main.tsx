import React, { useEffect, useState } from 'react';

import PokemonList from './PokemonList';
import { PokemonData, Type } from '../types';

const Main: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);

  const getPokemon = async () => {
    try {
      // for (let id = 387; id <= 493; id++) {
      for (let id = 387; id <= 389; id++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error('Found no Pokemon!');
        }

        const data = await response.json();

        const pokemon: PokemonData = {
          id: data.id,
          name: data.name,
          weight: data.weight,
          type: data.types.map((d: Type) => d.type.name).join(', '),
          image: data.sprites.other['official-artwork'].front_default,
          animatedImage:
            data.sprites.versions['generation-v']['black-white'].animated
              .front_default,
        };

        setPokemons((prevPokemons) => {
          return [...prevPokemons, pokemon];
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return <PokemonList props={pokemons} />;
};

export default Main;
