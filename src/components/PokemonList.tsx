import React from 'react';
import { Box, Grid, Image, Text, useDisclosure } from '@chakra-ui/react';

import { PokemonData } from '../types';
import DetailModal from './detailModal';

type ModalPokemonData = PokemonData & {
  isOpen?: () => void;
  onOpen?: () => void;
  onClose?: () => void;
};

const PokemonList: React.FC<{ props: ModalPokemonData[] }> = ({ props }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={5}>
        {props.map((pokemon: ModalPokemonData) => {
          return (
            <>
              <DetailModal props={props} />
              <Box
                key={pokemon.id}
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
                  transform: 'scale(1.01)',
                  transition: 'all .2s ease-out',
                  border: '0px',
                }}>
                <Box>
                  <Image
                    src={pokemon.image}
                    alt={pokemon.name}
                    w="70%"
                    mx="auto"
                  />
                </Box>
                <Text textAlign="center" fontSize="x-large" fontWeight="bold">
                  {pokemon.name}
                </Text>
              </Box>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default PokemonList;
