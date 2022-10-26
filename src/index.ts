import { GraphQLServer } from "graphql-yoga";

// import {resolvers}  from "./graphql/resolvers/index";

const resolvers = require("./graphql/resolvers")

import { typeDefs } from "./graphql/typeDefs";

import {pubsub} from "./pubsub";

import db from "./data"


const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { 
    pubsub,
    db
  },
});

server.start(() => console.log("Server is running on http://localhost:4000/"));
