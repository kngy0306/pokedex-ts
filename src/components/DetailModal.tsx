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

type ModalPokemonData = PokemonData & {
  isOpen?: () => void;
  onOpen?: () => void;
  onClose?: () => void;
};

const DetailModal: React.FC<{ props: ModalPokemonData[] }> = ({ props }) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent
        backgroundColor="blackAlpha.600"
        color="#eee"
        borderRadius="full">
        <ModalHeader textAlign="center">
          <Text fontSize="xxx-large">{props.name}</Text>
        </ModalHeader>
        <ModalBody textAlign="center">
          <Image src={props.animatedImage} alt={props.name} w="30%" m="auto" />
          <Text fontSize="x-large" pt={10}>
            index: {props.id}
          </Text>
          <Text fontSize="x-large">type: {props.type}</Text>
          <Text fontSize="x-large">weight: {props.weight}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DetailModal;
