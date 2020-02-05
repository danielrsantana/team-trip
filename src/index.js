import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql/schemas';
import rootValue from './graphql/resolvers';

express()
  .use(
    '/',
    graphqlHTTP({
      schema,
      rootValue,
      graphiql: true,
    }),
  )
  .listen(process.env.PORT || 4000, () => {
    console.log(`Server started on port: ${process.env.PORT || 4000}`);
  });