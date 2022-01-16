import { gql } from 'apollo-server';

const query = gql`
  type Query {
    posts: [Post]
    post(slug: String!): Post
  }
`;

export default query;
