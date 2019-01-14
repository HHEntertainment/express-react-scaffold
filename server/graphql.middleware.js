import { ApolloServer } from 'apollo-server-express';
import { schema } from './graphql';

function applyMiddlewareToApp(app) {
  const apolloServer = new ApolloServer({
    schema,
    context: ({ ctx }) => ctx,
  });

  apolloServer.applyMiddleware({ app });
}

export { applyMiddlewareToApp, schema };
