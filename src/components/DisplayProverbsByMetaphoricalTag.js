import React from 'react';
import ProverbComponent from './Proverb';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Loading from './Loading';

const DisplayProverbsByMetaphoricalTag = (props) => {
        const {data, loading, error} = useQuery(gql`{
            allProverbs(where: {
                metaphoricalTags_some: {
                  tag : "${props.tag}"
                }
              }
            ){
            proverb
            literalTags{
              tag
            }
              metaphoricalTags{tag}
            }
            }
            `);
        if (loading) return <Loading/>;
        if (error) return <p>Error :(</p>;

      return (
        data.allProverbs.map((proverb) => (
          <ProverbComponent proverb ={proverb} setMode = {props.setMode} setLiteralTag={props.setLiteralTag} setMetaphoricalTag={props.setMetaphoricalTag} /> ))
      );
    }

  export default DisplayProverbsByMetaphoricalTag