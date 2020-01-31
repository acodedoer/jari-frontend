import React from 'react';
import Display from './Display';
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
        <Display proverbs= {data.allProverbs}/>
      );
    }

  export default DisplayProverbsByMetaphoricalTag