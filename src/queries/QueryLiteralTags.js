import gql from 'graphql-tag';
const QueryLiteralTags = gql`{
  allLiteralTags(orderBy: "name_ASC"){
        name
    }}
    `;

export default QueryLiteralTags