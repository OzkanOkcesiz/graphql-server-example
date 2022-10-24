const { GraphQLServer } = require("graphql-yoga");

const resolvers = require("./graphql/resolvers")
const typeDefs = require("./graphql/typeDefs")

const pubsub = require("./pubsub");

const db = require("./data");


const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { 
    pubsub,
    db
  },
});

server.start(() => console.log("Server is running on http://localhost:4000/"));
