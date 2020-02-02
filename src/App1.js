import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import {Jari} from './components/Jari';
import { useQuery } from '@apollo/react-hooks';
import QueryAll from './queries/QueryAll';
import QueryLiteralTags from './queries/QueryLiteralTags';
import QueryMetaphoricalTags from './queries/QueryMetaphoricalTags';
import Loading from './components/Loading';


const App1 = () => {

    const {data_all, loading_all, error_all} = useQuery(QueryAll);
    const {data_literal, loading_literal, error_literal} = useQuery(QueryLiteralTags);
    const {data_metaphorical, loading_metaphorical, error_metaphorical}  = useQuery(QueryMetaphoricalTags);
    
    if (loading_all ||  loading_literal || loading_metaphorical) return (<Loading/>);
    if (error_all || error_literal || error_metaphorical) return <p>Error :(</p>;

  return (
      <Jari/>
  );
}

export default App1;
