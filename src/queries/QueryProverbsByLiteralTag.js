import gql from 'graphql-tag';

const createQuery = (name) => (gql`{
    allProverbs(where: {
        literalTags_some: {
          name : "${name}"
        }
      }
    ){
    proverb
    literalTags{
      name
    }
      metaphoricalTags{name}
    }
    }
`)

export default createQuery