import gql from 'graphql-tag';
const QueryAll = gql`{
    allProverbs(where: {
        publish : true
      }
    ){
      name
      literalTags{
        name
      }
        metaphoricalTags{name}
      }
    }`;

export default QueryAll