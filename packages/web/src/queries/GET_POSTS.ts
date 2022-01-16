import { gql } from '@apollo/client';

const query = gql`
  query GET_POSTS {
    posts {
      body
      layout
      slug
      spotlightImage
      state
      title
    }
  }
`;

export default query;
