import gql from 'graphql-tag';
const QueryMetaphoricalTags = gql`{
  allMetaphoricalTags(orderBy: "name_ASC"){
        name
    }}
    `;

export default QueryMetaphoricalTags