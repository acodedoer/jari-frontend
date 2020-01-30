import React from 'react';
import ProverbComponent from './Proverb';
import { useQuery } from '@apollo/react-hooks';
import Loading from './Loading';
import QueryAll from '../queries/QueryAll'


const DisplayAllProverbs = (props) => {
        const {data, loading, error} = useQuery(QueryAll);
        if (loading) return (<Loading/>);
        if (error) return <p>Error :(</p>;

      return (
        data.allProverbs.map((proverb) => (
            <ProverbComponent proverb ={proverb} setMode = {props.setMode} setLiteralTag={props.setLiteralTag} setMetaphoricalTag={props.setMetaphoricalTag} /> ))
      );
    }

  export default DisplayAllProverbs