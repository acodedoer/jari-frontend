import gql from 'graphql-tag';
const QueryAll = gql`{
    allProverbs{
      proverb
      literalTags{
        tag
      }
        metaphoricalTags{tag}
      }
    }`;

export default QueryAll