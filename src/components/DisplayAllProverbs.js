import React from 'react';
import ProverbComponent from './Proverb';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Loading from './Loading';


const DisplayAllProverbs = (props) => {
        const {data, loading, error} = useQuery(gql`{
            allProverbs{
              proverb
              literalTags{
                tag
              }
                metaphoricalTags{tag}
              }
            }
            `);
        if (loading) return (<Loading/>);
        if (error) return <p>Error :(</p>;

      return (
        data.allProverbs.map((proverb) => (
            <ProverbComponent proverb ={proverb} setMode = {props.setMode} setLiteralTag={props.setLiteralTag} setMetaphoricalTag={props.setMetaphoricalTag} /> ))
      );
    }

  export default DisplayAllProverbs