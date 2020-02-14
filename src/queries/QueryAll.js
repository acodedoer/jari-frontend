import gql from 'graphql-tag';
const QueryAll = gql`{
    allProverbs{
      name
      literalTags{
        name
      }
        metaphoricalTags{name}
      }
    }`;

export default QueryAll