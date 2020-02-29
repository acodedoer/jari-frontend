import React from 'react';
import ProverbComponent from './Proverb';
import { useQuery } from '@apollo/react-hooks';
import Loading from './Loading';
import Error from './Error'
import QueryAll from '../queries/QueryAll'


const DisplayAllProverbs = (props) => {
        const {data, loading, error} = useQuery(QueryAll);
        if (loading) return (<Loading/>);
        if (error) return (<Error/>);

      return (
        data.allProverbs.map((proverb, index) => (
            <ProverbComponent key={index} proverb ={proverb} setMode = {props.setMode} setLiteralTag={props.setLiteralTag} setMetaphoricalTag={props.setMetaphoricalTag} /> ))
      );
    }

  export default DisplayAllProverbs