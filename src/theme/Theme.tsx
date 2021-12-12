import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Caveat',
        backgroundColor: 'gray.600',
        color: 'gray.800',
      },
    },
  },
});
