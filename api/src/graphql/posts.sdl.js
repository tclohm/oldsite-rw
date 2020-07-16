export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    image: String!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post]
    post(id: Int!): Post
  }

  input PostInput {
    title: String
    body: String
    image: String
  }

  type Mutation {
    createPost(input: PostInput!): Post
    updatePost(id: Int!, input: PostInput!): Post
    deletePost(id: Int!): Post
  }
`
