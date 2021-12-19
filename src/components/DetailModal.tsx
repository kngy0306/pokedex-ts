import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
  Image,
} from '@chakra-ui/react';

import { PokemonData } from '../types';

const DetailModal: React.FC<{
  modalOpen: boolean;
  modalClose: () => void;
  pokemon: PokemonData;
}> = ({ modalOpen, modalClose, pokemon }) => {
  return (
    <Modal isOpen={modalOpen} onClose={modalClose}>
      <ModalOverlay />
      <ModalContent
        backgroundColor="blackAlpha.600"
        color="#eee"
        borderRadius="lg">
        <ModalHeader textAlign="center">
          <Text fontSize="xxx-large">{pokemon.name}</Text>
        </ModalHeader>
        <ModalBody textAlign="center">
          <Image
            src={pokemon.animatedImage}
            alt={pokemon.name}
            w="30%"
            m="auto"
          />
          <Text fontSize="x-large" pt={10}>
            index: {pokemon.id}
          </Text>
          <Text fontSize="x-large">type: {pokemon.type}</Text>
          <Text fontSize="x-large">weight: {pokemon.weight}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DetailModal;
