import React from 'react';
import { Box, Image, Text, useDisclosure } from '@chakra-ui/react';

import { PokemonData } from '../types';
import DetailModal from './DetailModal';

const Pokemon: React.FC<{ pokemon: PokemonData }> = ({ pokemon }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <DetailModal modalOpen={isOpen} modalClose={onClose} pokemon={pokemon} />
      <Box
        onClick={onOpen}
        borderBottom="1px solid #cebf7b"
        borderRight=".5px solid #cebf7b"
        bg="#484848"
        color="white"
        shadow="md"
        rounded="md"
        py={10}
        px={3}
        cursor="pointer"
        _hover={{
          transform: 'scale(.95)',
          transition: 'all .2s ease-out',
          border: '0px',
        }}>
        <Box>
          <Image src={pokemon.image} alt={pokemon.name} w="70%" mx="auto" />
        </Box>
        <Text textAlign="center" fontSize="x-large" fontWeight="bold">
          {pokemon.name}
        </Text>
      </Box>
    </>
  );
};

export default Pokemon;
