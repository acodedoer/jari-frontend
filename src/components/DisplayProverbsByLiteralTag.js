import React from 'react';
import ProverbComponent from './Proverb';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";


const DisplayProverbsByLiteralTag = (props) => {
  const {data, loading, error} = useQuery(gql`{
      allProverbs(where: {
          literalTags_some: {
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
        <ProverbComponent setMode = {props.setMode} proverb ={proverb} setLiteralTag={props.setLiteralTag} setMetaphoricalTag={props.setMetaphoricalTag} /> ))
  );
}

export default DisplayProverbsByLiteralTag