import React, { useEffect, useState } from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { theme } from './theme/Theme';
import { PokemonData, Type } from './types';

import Header from './components/Header';
// import Main from './components/Main';
import Footer from './components/Footer';
import PokemonList from './components/PokemonList';

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);

  const getPokemon = async (id: number) => {
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
  };

  useEffect(() => {
    try {
      for (let id = 387; id <= 389; id++) {
        getPokemon(id);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  const content = <PokemonList props={pokemons} />;

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.md">
        <Header />
        main
        {content}
        <Footer />
      </Container>
    </ChakraProvider>
  );
};

export default App;
