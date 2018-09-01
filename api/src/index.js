const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");

const resolvers = {
  Query: {
    user(parent, args, context, info) {
      return context.db.query.user({ where: { id: args.userId } }, info);
    },
    userByName(parent, args, context, info) {
      return context.db.query.users(
        {
          where: {
            name: args.name
          }
        },
        info
      );
    }
  },
  Mutation: {
    createUser(parent, args, context, info) {
      return context.db.mutation.createUser(
        {
          data: {
            name: args.name
          }
        },
        info
      );
    }
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
