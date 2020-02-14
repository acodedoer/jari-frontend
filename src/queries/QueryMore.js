import gql from 'graphql-tag';

const QueryMore = gql`
  query AllProverbs($cursor: String) {
    allProverbs (id: $cursor){
      id
      proverb
      literalTags{
        name
      }
        metaphoricalTags{name}
      }
    }`;

export default QueryMore