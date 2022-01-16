import { gql } from 'apollo-server';

const post = gql`
  type Post {
    body: String
    layout: String
    slug: String
    spotlightImage: String
    state: String
    title: String
  }
`;

export default post;
