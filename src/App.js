import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import DisplayProverbs from './components/DisplayProverbs'

const client = new ApolloClient({
  uri: 'https://jari-backend.herokuapp.com/admin/api',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <DisplayProverbs/>
    </ApolloProvider>
  );
}

export default App;
