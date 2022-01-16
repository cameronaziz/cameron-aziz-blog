import { gql } from '@apollo/client';

const query = gql`
  query GET_POST($slug: String!) {
    post(slug: $slug) {
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
