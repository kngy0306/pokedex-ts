import React from 'react';
import { Grid } from '@chakra-ui/react';

import { PokemonData } from '../types';
import Pokemon from './Pokemon';

const PokemonList: React.FC<{ props: PokemonData[] }> = ({ props }) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={5}>
      {props.map((pokemon: PokemonData) => {
        return <Pokemon key={pokemon.id} pokemon={pokemon} />;
      })}
    </Grid>
  );
};

export default PokemonList;
