export default `
  type Comment {
    _id: String!
    body: String!
    article: Article!
    author: User!
  }

  type Query {
    comment(_id: ID!): Comment!
    comments: [Comment!]!
  }

  type Mutation {
    createComment(comment: CreateCommentInput): Comment!
    updateComment(_id: String!, comment: UpdateCommentInput!): Comment!
    deleteComment(_id: String!): Comment!
  }

  input CreateCommentInput {
    body: String!
    article: ID!
    author: ID!
  }
  
  input UpdateCommentInput {
    body: String!
  } 
`;
