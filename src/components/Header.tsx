import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Header: React.FC = () => {
  return (
    <Box w="100%" textAlign="center" py="10" color="#cebf7b">
      <Text fontSize="xxx-large">Pokedex</Text>
      <Text fontSize="x-large">diamond-pearl</Text>
    </Box>
  );
};

export default Header;
