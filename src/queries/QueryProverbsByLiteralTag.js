import gql from 'graphql-tag';

const createQuery = (tag) => (gql`{
    allProverbs(where: {
        literalTags_some: {
          tag : "${tag}"
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
`)

export default createQuery