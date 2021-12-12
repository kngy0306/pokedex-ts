import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { theme } from './theme/Theme';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.md">
        <Header />
        <Main />
        <Footer />
      </Container>
    </ChakraProvider>
  );
};

export default App;
