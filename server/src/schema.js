const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    spaceCats: [SpaceCat]
  }
  type SpaceCat {
    id: ID!
    name: String!
    age: Int
    missions: [Mission]
  }
  type Mission {
    id: ID!
    "description of the name"
    name: String!
    description: String!
  }
`;
module.exports = typeDefs;
