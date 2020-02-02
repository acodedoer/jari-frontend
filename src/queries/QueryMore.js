import gql from 'graphql-tag';

const QueryMore = gql`
  query AllProverbs($cursor: String) {
    allProverbs (id: $cursor){
      id
      proverb
      literalTags{
        tag
      }
        metaphoricalTags{tag}
      }
    }`;

export default QueryMore