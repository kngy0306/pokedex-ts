import React from 'react';

type PokemonData = {
  id: number;
  name: string;
};

const PokemonList: React.FC<{ props: PokemonData[] }> = ({ props }) => {
  return (
    <div>
      {props.map((p: PokemonData) => {
        return <h1 key={p.id}>{p.name}</h1>;
      })}
    </div>
  );
};

export default PokemonList;
