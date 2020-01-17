import React from 'react';
import './App.css';
import Proverb from './components/Proverb';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'https://jari-backend.herokuapp.com/admin/api',
});

client
  .query({
    query: gql`
    {
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
    `
  })
  .then(result => console.log(result));


function App() {
  return (
    <div style={{width:"100%"}}>
      <Proverb/>
    </div>
    
  );
}

export default App;
