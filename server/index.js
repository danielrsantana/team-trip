import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schemas';
import rootValue from './resolvers';

express()
  .use(
    '/',
    graphqlHTTP({
      schema,
      rootValue,
      graphiql: true,
    }),
  )
  .listen(4000, () => {
    console.log('Running server on port localhost:4000');
  });
