import gql from 'graphql-tag';
const QueryMetaphoricalTags = gql`{
  allMetaphoricalTags(orderBy: "tag_ASC"){
        tag
    }}
    `;

export default QueryMetaphoricalTags