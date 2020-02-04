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
  .listen(4000, () => {
    console.log('Running server on port localhost:4000');
  });

/* next steps:
1. Finish developing Graphql Resolvers
2. Install mongoose
3. Implement mongodb queries

reference: https://dev.to/alvarojsnish/graphql-mongodb-the-easy-way-ngc
*/
