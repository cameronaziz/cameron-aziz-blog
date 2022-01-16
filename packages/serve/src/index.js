// @ts-check
const {ApolloServer, gql} = require('apollo-server');
const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../../../data/posts');

const typeDefs = gql `
  type Post {
    body: String
    layout: String
    slug: String
    spotlightImage: String
    state: String
    title: String
  }

  type Query {
    posts: [Post]
  }
`;

const resolvers = {
  Query: {
    posts: () => {
      const postFiles = fs.readdirSync(postsDir);
      const posts = postFiles.map(file => {
        const post = JSON.parse(fs.readFileSync(path.join(postsDir, file)));
        post.slug = file.replace('.json', '');
        return post;
      });
      return posts;
    }
  }
};

const server = new ApolloServer({typeDefs, resolvers});

// The `listen` method launches a web server.
server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
