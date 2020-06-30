export const schema = gql`
  type Contact {
    id: Int!
    email: String!
    createdAt: DateTime!
  }

  type Query {
    contacts: [Contact]
  }

  input CreateContactInput {
    email: String!
  }

  input UpdateContactInput {
    email: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact
  }
`
