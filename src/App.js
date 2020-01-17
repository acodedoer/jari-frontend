import React from 'react';
import './App.css';
import Proverb from './components/Proverb';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { ApolloProvider } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import ProverbComponent from './components/Proverb';


const client = new ApolloClient({
  uri: 'https://jari-backend.herokuapp.com/admin/api',
});

    function GETALLPROVERBS() {
      const { loading, error, data } = useQuery(gql`{
        allProverbs{
          proverb
          literalTags{
            tag
          }
          metaphoricalTags{
            tag
          }
        }
      }
      `);
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      console.log(data.allProverbs)
      return data.allProverbs.map(({ proverb, literalTags, metaphoricalTags}) => (
        <ProverbComponent proverb ={proverb} literalTags={literalTags} metaphoricalTags={metaphoricalTags} />
      ));
    }

function App() {
  return (
    <ApolloProvider client={client}>
      <GETALLPROVERBS/>
    </ApolloProvider>
       
  );
}

export default App;
