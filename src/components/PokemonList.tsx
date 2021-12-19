import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import { PokemonData } from '../types';
import Pokemon from './Pokemon';

const PokemonList: React.FC<{ props: PokemonData[] }> = ({ props }) => {
  return (
    <SimpleGrid spacing="5" minChildWidth="150px">
      {props.map((pokemon: PokemonData) => {
        return <Pokemon key={pokemon.id} pokemon={pokemon} />;
      })}
    </SimpleGrid>
  );
};

export default PokemonList;
