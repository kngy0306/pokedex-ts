import React, { useEffect, useState } from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { theme } from './theme/Theme';

import Header from './components/Header';
// import Main from './components/Main';
import Footer from './components/Footer';

type PokemonData = {
  id: number;
  name: string;
  weight: number;
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

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);

  const getPokemon = async () => {
    try {
      for (let id = 387; id <= 389; id++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error('Found no Pokemon!');
        }

        const data = await response.json();
        const type: string = data.types
          .map((d: Types) => d.type.name)
          .join(', ');

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
        console.log(pokemon);

        setPokemons((prevPokemons) => {
          return [...prevPokemons, pokemon];
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPokemon();
  }, [pokemons]);

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.md">
        <Header />
        {pokemons}
        <Footer />
      </Container>
    </ChakraProvider>
  );
};

export default App;
