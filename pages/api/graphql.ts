import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const cors = Cors();

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default cors(async function handler(req: any, res: any) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
