const { GraphQLServer } = require("graphql-yoga");
const { Prisma, forwardTo } = require("prisma-binding");

const resolvers = {
  Query: {
    courses: forwardTo("db"),
    players: forwardTo("db"),
    scoringSessions: forwardTo("db")
  },
  Mutation: {
    createScoringSession: forwardTo("db"),
    updateScoringSession: forwardTo("db")
  }
};

// author: {
//   connect: { id: args.userId }
// }

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: "./src/generated/prisma.graphql",
      endpoint: "https://eu1.prisma.sh/kim-fransman-4c718b/tisdagsgolfen/dev"
    })
  })
});
server.start(() => console.log("Server is running on http://localhost:4000"));
