import gql from 'graphql-tag';
const QueryLiteralTags = gql`{
  allLiteralTags(orderBy: "tag_ASC"){
        tag
    }}
    `;

export default QueryLiteralTags