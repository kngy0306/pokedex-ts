import { Image } from '@chakra-ui/react';
import React from 'react';
import { PokemonData } from '../types';

const PokemonList: React.FC<{ props: PokemonData[] }> = ({ props }) => {
  return (
    <div>
      {props.map((p: PokemonData) => {
        return (
          <>
            <h1 key={p.id}>{p.name}</h1>
            <Image src={p.image} alt={p.name} w="70%" mx="auto" />
          </>
        );
      })}
    </div>
  );
};

export default PokemonList;
